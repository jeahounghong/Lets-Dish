const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");
const Ingredient = require('../../models/Ingredient')
const mongoose = require("mongoose");

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

router.get("/search", (req,res) => {
    let url = req.url;
    url = url.substring(0,8) + "&" + url.substring(8)
    
    let urlArray = url.split("&ingredients[]=")
    urlArray.shift()
    const ingredients = urlArray


    findRecipes(ingredients)
        .then(recipes => {
            res.json(recipes)
        })

})

/*
    FIND RECIPES
    
    Async function that finds recipes for a given list of ingredients.

*/
async function findRecipes(ingredients) {
    let recipes = {}
    return await Ingredient.find({ '_id': { $in: ingredients}})
        .then(ingredients => {
            ingredients.forEach(ing => {
                ing.recipes.forEach(recipe => {
                    recipes[recipe] = recipe;
                })
            })
        })
        .then(() => {
            return Recipe.find({ '_id': { $in: Object.values(recipes)}})
            .then(recs => {
                    return recs
                })
            })
}

module.exports = router;