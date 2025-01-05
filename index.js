const express = require("express")
const path = require("path")


const port = process.env.PORT || 3000

const app = express()



app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")


app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/uploads', express.static(path.join(__dirname,"uploads")));


app.use("/",express.static( path.join(__dirname,"/public")))
app.use("/admin",express.static(path.join(__dirname,"/public")))




app.use("/", require("./routes/users"))

app.use("/admin", require("./routes/admin"))








app.listen(port, (err)=>{
    if(!err){
        console.log("server created successfully")
    }else{
        console.error("cannot connect")
    }
})