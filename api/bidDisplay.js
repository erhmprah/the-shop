const connection = require("../connection")
const path = require("path")

async function getBids(req,res){
    const fetchQuery = "SELECT * FROM bid"
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

        const rows = await promiseQuery()
   
            res.render(path.join(__dirname,"..","views","admin","bids.ejs"),{bids:rows})
    
    }catch(err){
        console.log("cannot fetch bids",err.stack)
    }  
        
    
}

module.exports = getBids