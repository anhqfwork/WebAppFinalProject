import React, { useState } from 'react'
import './AddEquipment.css'
import { axios } from '../../../axios'
import { Link } from 'react-router-dom'

const AddEquipment = () => {
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [country, setCountry] = useState()
    const [model, setModel] = useState()
    const [subcategory, setSubcategory] = useState()
    const [condition, setCondition] = useState()
    const [brand, setBrand] = useState()

    const changeImg = (e) => {
        setImg(e.target.value)
    }

    const changeName = (e) => {
        setName(e.target.value)
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

    const changeModel = (e) => {
        setModel(e.target.value)
    }

    const changeSubCategory = (e) => {
        setSubcategory(e.target.value)
    }

    const changeCondition = (e) => {
        setCondition(e.target.value)
    }

    const changeBrand = (e) => {
        setBrand(e.target.value)
    }

    const handleSubmit = async () => {
        const newEquipment = {
            img,
            name,
            quantity,
            category,
            description,
            country,
            model,
            subcategory,
            condition,
            brand,
        }

        await axios
            .post(`/api/v1/equipment/`, newEquipment)
            .catch((err) => console.log(err))

        console.log(newEquipment)
    }

    return (
        <div>
            <div className="block">
                <Link to={'/equipments'} className="btn_black">Back to Equipments</Link>
            </div>
            <div className="center add-container">
                <div className='add-img'>
                    <img
                        src={img}
                        alt='not available'
                        onChange={changeImg}
                        width='100%'
                        height='100%'
                    />
                </div>
                <form className="add-form">
                    <div>
                        <label>Image: </label>
                        <input className='input-text' type='text' value={img || ''} onChange={changeImg} />
                    </div>
                    <div>
                        <label>Name: </label>
                        <input
                            type='text'
                            value={name || ''}
                            onChange={changeName}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>Quantity: </label>
                        <input
                            type='text'
                            value={quantity || ''}
                            onChange={changeQuantity}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>Category: </label>
                        <input
                            type='text'
                            value={category || ''}
                            onChange={changeCategory}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea
                            size='150'
                            value={description || ''}
                            onChange={changeDescription}
                            className='input-description'
                        />
                    </div>
                    <div>
                        <label>Country: </label>
                        <input
                            type='text'
                            value={country || ''}
                            onChange={changeCountry}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>Model: </label>
                        <input
                            type='text'
                            value={model || ''}
                            onChange={changeModel}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>SubCategory: </label>
                        <input
                            type='text'
                            value={subcategory || ''}
                            onChange={changeSubCategory}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>Condition: </label>
                        <input
                            type='text'
                            value={condition || ''}
                            onChange={changeCondition}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>Brand: </label>
                        <input
                            type='text'
                            value={brand || ''}
                            onChange={changeBrand}
                            className='input-text'
                        />
                    </div>
                </form>
            </div>
            <div className='block'>
                <a href='/equipments' onClick={handleSubmit} className='btn_prim'>
                    Submit
                </a>
            </div>
        </div>
    )
}

export default AddEquipment
