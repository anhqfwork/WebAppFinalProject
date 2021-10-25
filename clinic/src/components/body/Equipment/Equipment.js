import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Equipment.css'
import { axios } from '../../../axios'

const Equipment = () => {
    const [equipment, setEquipment] = useState([])
    const { id } = useParams()

    const getEquipment = async () => {
        const res = await axios
            .get(`/api/v1/equipment/${id}`)
            .catch((err) => console.log(err))

        if (res && res.data) {
            setEquipment(res.data.equipment)
        }
    }

    useEffect(() => {
        getEquipment()
    }, [])

    const deleteEquipment = async (id) => {
        await axios
            .delete(`/api/v1/equipment/${id}`)
            .catch((err) => console.log('deleted'))
    }

    return (
        <div>
            <div>
                <button>
                    <Link to='/equipments'>Back to Equipments</Link>
                </button>
            </div>
            <div>
                <img className='item-image' src={equipment.img} alt='' />
                <h1>Name: {equipment.name}</h1>
                <p>EquipmentNo: {equipment.equipmentNo}</p>
                <p>Quantity: {equipment.quantity}</p>
                <p>Category: {equipment.category}</p>
                <p>Country: {equipment.country}</p>
                <p>Description: {equipment.description}</p>
                <button>
                    <Link to={`/equipments/${equipment._id}/edit`}>Edit</Link>
                </button>
                <button onClick={() => deleteEquipment(equipment._id)}>
                    <Link to='/equipments'>Delete</Link>
                </button>
            </div>
        </div>
    )
}

export default Equipment
