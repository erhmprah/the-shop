const mysql = require("mysql");
const connection = require("../connection");

const path = require("path");

async function insertItem(req, res) {
  const name = req.body.name;
  const brand = req.body.brand;
  const category = req.body.category;
  const discription = req.body.discription;
  const price = req.body.price;
  const date = req.body.date;

  const image = req.file ? path.join("uploads/") + req.file.filename : "";

  const values = [name, brand, category, discription, price, image, date];

  const insertQuery =
    "INSERT INTO item(name,brand,category,discription,price,image,date) VALUES(?,?,?,?,?,?,?)";
  try {
    const insertPromise = () => {
      return new Promise((resolve, reject) => {
        connection.query(insertQuery, values, (err, results) => {
          if (err) {
            reject(err);
          } else resolve(results);
        });
      });
    };

    const results = await insertPromise();
    res
      .status(200)
      .send(`insert successfully with an index id of ${results.insertId} `);
  } catch (err) {
    res.status(201).send("connot insert item try again");
    console.error(`cannot insert insert data ${err.stack}`);
  }
}

module.exports = insertItem;
