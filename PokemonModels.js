
const mongoose = require('mongoose')


const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    img: {
        type: String,
        required: true
    }
})
// Create the model
module.exports = mongoose.model('Pokemon', pokemonSchema )
