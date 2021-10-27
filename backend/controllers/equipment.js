const Equipment = require('../models/Equipment')

const getAllEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find({})
        res.status(200).json({ equipments })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.create(req.body)
        res.status(201).json({ equipment })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createEquipments = async (req, res) => {
    try {
        const equipments = req.body
        equipments.map(async (equipment) => {
            await Equipment.create(equipment)
        })
        res.status(201).json({ equipments })
    } catch {
        res.status(500).json({ msg: err })
    }
}

const getEquipment = async (req, res) => {
    try {
        const {id: equipmentId} = req.params 
        const equipment = await Equipment.findOne({_id: equipmentId})

        if (!equipment) {
            return res.status(404).json( {msg: `no equipment with id ${equipmentId}`})
        } else {
            res.status(200).json({equipment})
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updateEquipment = async (req, res) => {
    try {
        const {id: equipmentId} = req.params
        const equipment = await Equipment.findOneAndUpdate( {_id: equipmentId}, req.body, {
            new: true,
            runValidators: true
        })
        if (!equipment) {
            return res.status(404).json( {msg: `no equipment with id ${equipmentId}`})
        } else {
            res.status(200).json({equipment})
        }
    } catch(err) {
        res.status(500).json({msg: err})
    }
}

const deleteEquipment = async (req, res) => {
    try {
        const {id: equipmentId} = req. params
        const equipment = await Equipment.findOneAndDelete({_id:equipmentId})

        if (!equipment) {
            return res.status(404).json({msg: `no equipment with id ${equipmentId}`})
        } else {
            res.status(200).json({equipment})
        }
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

module.exports = {
    getAllEquipments,
    createEquipment,
    createEquipments,
    getEquipment,
    updateEquipment,
    deleteEquipment
}
