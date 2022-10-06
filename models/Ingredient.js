const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    vegetarian:{
        type: Boolean,
        required: true,
    },
    vegan: {
        type: Boolean,
        required: true,
    },
    glutenFree: {
        type: Boolean,
        required: true
    },
    imageUrl: {
        type: String,
    }
})

module.exports = Ingredient = mongoose.model('Ingredient', IngredientSchema);