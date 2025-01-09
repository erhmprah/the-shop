const connection = require("../connection")
const path = require("path")



async function bidPost(req,res){
    
    const name = req.body.name
    const phone = req.body.phone
    const size = req.body.size
    const itemId = req.body.hidden

    const insertQuery = "INSERT INTO bid (iditem,name,phone,size) VALUES(?,?,?,?)"
    const values = [itemId,name,phone,size]

    try{

        await connection.query(insertQuery,values,(err,)=>{
            if(err){
                
            }else(
                res.render(path.join(__dirname,"..","views","users","success.ejs"),{names:name,phones:phone})
                
            )
        })
    }catch(error){
        return res.send("An error occured please try again")
    }
    




}

module.exports = bidPost
