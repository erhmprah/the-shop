const path = require("path")
const connection = require("../connection")


async function fullItem(req,res){
    const itemId = req.query.hiddenInput
    
    const fullItemQuery = `SELECT name,brand,discription,price,image FROM item where idItem = ${itemId}`

    try{
        const fetchFullItem =()=>{
            return new Promise((resolve,reject)=>{
                connection.query(fullItemQuery,(err,row)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(row)
                    }
                })
            })
        }


        const row = await fetchFullItem()
        return res.render(path.join(__dirname,"..","views","users","full.ejs"),{rows:row})
      
    }catch(err){
        res.send("An error occured please try again ")
        console.error(err.stack)
    }

    
  
}


module.exports = fullItem