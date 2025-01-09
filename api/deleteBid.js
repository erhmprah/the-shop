const connection = require("../connection")

async function deleteBid(req,res){
    const itemId = req.query.hiddenInput

    const deleteQuery = `DELETE FROM bid where idbid = ${itemId}`

    try{
        const promiseQuery = ()=>{
            return new Promise((resolve,reject)=>{
                connection.query(deleteQuery,(err,results)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(results)
                    }
                })
            })
        }

         const row = await promiseQuery()
         return res.send(`bid with id ${itemId} has been deleted successfully`)
        

    }catch(err){
        console.log(`error deletting item ${err.stack}` )
        return res.send(` error deleting Item with id ${itemId} please try again`) 
        
    }

}

module.exports = deleteBid