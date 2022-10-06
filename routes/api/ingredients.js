const express = require("express");
const router = express.Router();
const Ingredient = require("../../models/Ingredient")

router.get("/test", (req,res) => res.json({mes: "This is the ingredients route."}))

router.get('/', (req,res) => {
    Ingredient.find()
        .then(ingredients => res.json(ingredients))
        .catch(err => res.status(404).json({noIngredientsFound: 'No ingredients found'}))
})

router.post('/', (req,res) => {
    console.log("BODYYYYYYY")
    console.log(req.body)
    const newIngredient = new Ingredient(req.body)
    newIngredient.save().then(ingredient => res.json(ingredient))
})

module.exports = router;