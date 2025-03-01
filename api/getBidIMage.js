
const connection = require("../connection")
const path = require("path")
async function getBidImage(req,res){


    const itemId = req.query.hiddenInput
    const query = `select * from item where iditem = ${itemId}`
try{

    const promiseQuery = ()=>{
        return new Promise((resolve,reject)=>{
            connection.query(query,(err,row)=>{

                if(err){
                    reject(err)
                }else{
                    resolve(row)
                }

            })
           
        })

    }   

    const image = await promiseQuery()
    res.render(path.join(__dirname,"..","views","admin","itemImage.ejs"),{result:image})
    console.log(image)

}catch(error){
    console.log("cannot fetch image",error.stack
    )
    res.send("cannot fetch image try again")
}
    
}

module.exports = getBidImage