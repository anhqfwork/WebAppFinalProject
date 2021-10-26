const mongoose = require('mongoose')

const EquipmentSchema = new mongoose.Schema({
    name: String,
    img: String,
    model: String,
    quantity: Number,
    category: String,
    description: String,
    country: String,
    subcategory: String,
    condition: String, 
    brand: String
})

module.exports = mongoose.model('Equipment', EquipmentSchema)
