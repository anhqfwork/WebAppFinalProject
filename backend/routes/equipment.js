const express = require('express')
const router = express.Router()

const {
    getAllEquipments,
    createEquipment,
    getEquipment,
    updateEquipment,
    deleteEquipment,
} = require('../controllers/equipment')

router.route('/').get(getAllEquipments).post(createEquipment)

router
    .route('/:id')
    .get(getEquipment)
    .patch(updateEquipment)
    .delete(deleteEquipment)

module.exports = router
