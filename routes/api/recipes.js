const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");

router.get("/", (req,res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
})

router.post("/", (req,res) => {
    const newRecipe = new Recipe(req.body)

    console.log("NEW RECIPE")
    console.log(newRecipe)
    newRecipe.save().then(recipe => res.json(recipe))
        .catch(err => console.log(err))
})

module.exports = router;