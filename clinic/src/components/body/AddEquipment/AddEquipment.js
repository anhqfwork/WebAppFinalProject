import React, { useState } from 'react'
import './AddEquipment.css'
import { axios } from '../../../axios'
import { Link } from 'react-router-dom'

const AddEquipment = () => {
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [equipmentNo, setEquipmentNo] = useState()
    const [quantity, setQuantity] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [country, setCountry] = useState()

    const changeImg = (e) => {
        setImg(e.target.value)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEquipmentNo = (e) => {
        setEquipmentNo(e.target.value)
    }

    const changeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const changeCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = async () => {
        const newEquipment = {
            img, name, equipmentNo, quantity, category, description, country
        }

        await axios.post(`/api/v1/equipment/`, newEquipment).catch((err) => console.log(err))

        console.log(newEquipment)
    }

    return (
        <div>
            <div>
                <button>
                    <Link to={'/equipments'}>Back to Equipments</Link>
                </button>
            </div>
            <div className='add-img'>
                <img
                    src={img}
                    alt='not available'
                    onChange={changeImg}
                    width='20%'
                    height='20%'
                />
            </div>
            <form>
                <div>
                    <label>Image: </label>
                    <input type='text' value={img || ''} onChange={changeImg} />
                </div>
                <div>
                    <label>Name: </label>
                    <input
                        type='text'
                        value={name || ''}
                        onChange={changeName}
                    />
                </div>
                <div>
                    <label>EquipmentNo: </label>
                    <input
                        type='text'
                        value={equipmentNo || ''}
                        onChange={changeEquipmentNo}
                    />
                </div>
                <div>
                    <label>Quantity: </label>
                    <input
                        type='text'
                        value={quantity || ''}
                        onChange={changeQuantity}
                    />
                </div>
                <div>
                    <label>Category: </label>
                    <input
                        type='text'
                        value={category || ''}
                        onChange={changeCategory}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type='text'
                        value={description || ''}
                        onChange={changeDescription}
                    />
                </div>
                <div>
                    <label>Country: </label>
                    <input
                        type='text'
                        value={country || ''}
                        onChange={changeCountry}
                    />
                </div>
            </form>
            <button type='submit' onClick={handleSubmit} className='btn'>
                <a href='/equipments'>Submit</a>
            </button>
        </div>
    )
}

export default AddEquipment
