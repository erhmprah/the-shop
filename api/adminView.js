const connection = require("../connection")
const path = require("path")

async function adminFetch(req,res){
    const fetchQuery = `SELECT iditem,name,image FROM item`

    try{
        const promiseQuery = ()=>{
            return new Promise((resolve,reject)=>{
                connection.query(fetchQuery,(err,row)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(row)
                    }
                })
            })
        }

         const row = await promiseQuery()
         
         return res.render(path.join(__dirname,"..","views","admin","view.ejs"),{rows:row})

    }catch(err){
        console.log(`error fetching data` )
        return res.send(`error fetching data please try again`) 
        
    }

}

module.exports = adminFetch