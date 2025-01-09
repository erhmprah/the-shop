const express = require("express")
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ghana@50",
    database: "shop",
    multipleStatement: true  
})


connection.connect((err)=>{
    if(err){
        console.log("cannot connect to database")
    }else{
        console.log("database connected successfully")
    }
})

 module.exports = connection
