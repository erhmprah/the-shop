const express = require("express")
const path = require("path")
const indexFetch = require("../api/indexFetch")
const tilesFetch = require("../api/tilesFetch")
const fullItem = require("../api/fullItem")
const bidPost = require("../api/bidPost")
const router = express.Router()


router.get("/", indexFetch)
    
router.get("/tiles",tilesFetch)
   
router.get("/full",fullItem)
router.get("/bid",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","users","bidForm.html"))
})
router.post("/bidPost",bidPost)
    



module.exports = router