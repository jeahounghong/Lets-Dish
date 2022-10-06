const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array
    },
    country: {
        type: ObjectId
    },
    recipeUrl: {
        type: String,
        required: true
    }

})

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);