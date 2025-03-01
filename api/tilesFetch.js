const connection = require("../connection")
const path = require("path")

async function tilesFetch(req,res){

    const keyword = req.query.hiddenInput

    const tilesFetcQuery = `select iditem,name,brand,image,price from item where brand LIKE '%${keyword}%' || category LIKE '%${keyword}%' || name LIKE '%${keyword}%'`

    
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
        console.log(localStorage.getItem("itemId")) 
      
       

    }catch(err){
        return res.send("An error occured please try again",err.stack)
    }
    
}

module.exports = tilesFetch



