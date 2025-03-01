const path = require("path");
const connection = require("../connection");

async function indexFetch(req, res) {
  const TrendingQuery = `SELECT name,price,image FROM item order by rand() limit 15`;

  try {
    const fetchTrending = () => {
      return new Promise((resolve, reject) => {
        connection.query(TrendingQuery, (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        });
      });
    };

    const row = await fetchTrending();

    return res.render(
      path.join(__dirname, "..", "views", "users", "index.ejs"),
      { rows: row }
    );
  } catch (err) {
    res.send("An error occured please try again ");
    console.error(err.stack);
  }
}

module.exports = indexFetch;
