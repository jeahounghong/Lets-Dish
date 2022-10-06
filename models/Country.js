const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    flagUrl: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    recipes: {
        type: Array
    }
})

module.exports = Country = mongoose.model('Country', CountrySchema);