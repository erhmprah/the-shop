const express = require("express")
const path = require("path")
const indexFetch = require("../api/indexFetch")
const tilesFetch = require("../api/tilesFetch")
const fullItem = require("../api/fullItem")
const router = express.Router()


router.get("/", indexFetch)
    
router.get("/tiles",tilesFetch)
   
router.get("/full",fullItem)



module.exports = router