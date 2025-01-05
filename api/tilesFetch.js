const connection = require("../connection")
const path = require("path")

async function tilesFetch(req,res){

    const keyword = req.query.hiddenInput

    const tilesFetcQuery = `select iditem,name,brand,image,price from item where brand = '${keyword}' || category = '${keyword}' || name = '${keyword}'`


    try{
        const promiseQuery = ()=>{
            return new Promise((resolve,reject)=>{
                connection.query(tilesFetcQuery,(err,row)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(row)
                    }
                })
            })
        }

        const row = await promiseQuery()
        
            
        return res.render(path.join(__dirname,"..","views","users","tiles.ejs"),{rows:row})
            
      
       

    }catch(err){
        return res.send("An error occured please try again")
    }
    
}

module.exports = tilesFetch