const mongoose = require('mongoose')

const EquipmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    model: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true },
    subcategory: { type: String, required: true },
    condition: { type: String, required: true },
    brand: { type: String, required: true },
})

module.exports = mongoose.model('Equipment', EquipmentSchema)
