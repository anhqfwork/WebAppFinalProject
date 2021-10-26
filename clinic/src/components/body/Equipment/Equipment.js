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
            <div className="block">
                <Link to='/equipments' className="btn_black">Back to Equipments</Link>
            </div>
            <div className='equip_container'>
                <img className='item-image' src={equipment.img} alt='' />
                    <div className='equip_info'>
                        <h2>{equipment.name}</h2>
                        <p>
                            <span className='equip_data'>Quantity :</span> {equipment.quantity}
                        </p>
                        <p>
                            <span className='equip_data'>Category :</span> {equipment.category}
                        </p>
                        <p>
                            <span className='equip_data'>Country :</span> {equipment.country}
                        </p>
                        <p>
                            <span className='equip_data'>Model :</span> {equipment.model}
                        </p>
                        <p>
                            <span className='equip_data'>Sub Category :</span> {equipment.subcategory}
                        </p>
                        <p>
                            <span className='equip_data'>Condition :</span> {equipment.condition}
                        </p>
                        <p>
                            <span className='equip_data'>Brand :</span> {equipment.brand}
                        </p>
                        <Link to={`/equipments/${equipment._id}/edit`} className="btn_prim edit_btn">Edit</Link>            
                        <Link to='/equipments' onClick={() => deleteEquipment(equipment._id)} 
                            className="btn_del del_btn">Delete</Link>                           
                    </div>                    
                </div>
                <div className="center description">
                    <p>
                        <span className='equip_data'>Description :</span> {equipment.description}
                    </p>
                </div>
        </div>
    )
}

export default Equipment
