const mongoose = require('mongoose')

const EquipmentSchema = new mongoose.Schema({
    name: String,
    img: String,
    equipmentNo: String,
    quantity: Number,
    category: String,
    description: String,
    country: String,
    importedDate: String,
    insurancePeriod: String,
})

module.exports = mongoose.model('Equipment', EquipmentSchema)
