const express = require("express");
const router = express.Router();
const Country = require("../../models/Country");

router.get("/test", (req,res) => res.json({mes: "This is the countries route."}))

router.post("/", (req,res) => {
    const newCountry = new Country(req.body);
    newCountry.recipes = [];
    newCountry.save().then(country => res.json(country))
})

module.exports = router;