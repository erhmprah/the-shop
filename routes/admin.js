const express = require("express")
const path = require("path")
const insertItem = require("../api/addItem")
const upload = require("../middleware/multer")
const adminFetch = require("../api/adminView")
const adminDelete = require("../api/adminDelete")
const getBids = require("../api/bidDisplay")
const deleteBid = require("../api/deleteBid")
const getBidImage = require("../api/getBidIMage")
const router = express.Router()


router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","admin","dashboard.html"))
})


router.get("/add", (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","admin","add.html"))
})
router.post("/insert",upload.single('image'), insertItem)
router.get("/view", adminFetch)

router.get("/delete",adminDelete)

router.get("/bid", getBids)
router.get("/deleteBid",deleteBid)
router.get("/bidImage",getBidImage)




module.exports = router