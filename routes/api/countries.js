const express = require("express");
const router = express.Router();
const Country = require("../../models/Country");

router.get("/test", (req,res) => res.json({mes: "This is the countries route."}))



module.exports = router;