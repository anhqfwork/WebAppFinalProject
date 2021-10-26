import React, { useState, useEffect } from 'react'
import './Category.css'
import { useParams } from 'react-router'
import { axios } from '../../../axios'

const Category = () => {
    const [categories, setCategories] = useState([])
    const [equipments, setEquipments] = useState([])
    const [countries, setCountries] = useState([])

    const { category_self } = useParams()

    const getEquipments = async () => {
        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            const newEquipments = res.data.equipments.filter((equipment) => {
                return equipment.category.includes(category_self)
            })
            setEquipments(newEquipments)

            const newCategories = [
                ...new Set(
                    res.data.equipments.map((equipment) => {
                        return equipment.category
                    })
                ),
            ]
            setCategories(newCategories)

            const newCountries = [
                ...new Set(
                    newEquipments.map((equipment) => {
                        return equipment.country
                    })
                ),
            ]
            setCountries(newCountries)
        }
    }

    useEffect(() => {
        getEquipments()
    }, [])

    const Equipment = (equipment) => {
        return (
            <li className="product_item">
                <a href={`/equipments/${equipment._id}`}>
                    <img className='item-image' src={equipment.img} alt='' />
                </a>
                <div className="product_info">
                    <h5>{equipment.name}</h5>
                    <p>Country: <span>{equipment.country}</span></p>
                </div>                
            </li>
        )
    }

    const filterContent = (equipments, searchTerm) => {
        const result = equipments.filter((equipment) => {
            return equipment.name.includes(searchTerm)
        })
        setEquipments(result)
    }

    const handleTextSearch = async (e) => {
        const searchTerm = e.currentTarget.value

        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            const newEquipments = res.data.equipments.filter((equipment) => {
                return equipment.category.includes(category_self)
            })
            filterContent(newEquipments, searchTerm)
        }
    }

    const filterContentCountry = (equipments, searchTerm) => {
        const result = equipments.filter((equipment) => {
            return equipment.country.includes(searchTerm)
        })
        setEquipments(result)
    }

    const handleCountrySearch = async (country) => {
        const searchTerm = country
        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            const newEquipments = res.data.equipments.filter((equipment) => {
                return equipment.category.includes(category_self)
            })
            filterContentCountry(newEquipments, searchTerm)
        }
    }

    const handleChange = (e) => {
        const country = e.target.value
        handleCountrySearch(country)
    }

    const handleSortAZ = async () => {
        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            const newEquipments = res.data.equipments
                .filter((equipment) => {
                    return equipment.category.includes(category_self)
                })
                .sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })
            setEquipments(newEquipments)
        }
    }

    const handleSortZA = async () => {
        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            const newEquipments = res.data.equipments
                .filter((equipment) => {
                    return equipment.category.includes(category_self)
                })
                .sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    } else if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })
            setEquipments(newEquipments)
        }
    }

    return (
        <div>
            <div className='center'>
                <div className='filter'>
                    <div className='categories'>
                        <div className='sidebar_header'>Categories</div>
                        <ul>
                            <li
                                key='all'
                                className='cate_item'
                                onClick={() =>
                                    window.location.replace(`/equipments`)
                                }
                            >
                                All
                            </li>
                            {categories.map((category) => {
                                if (category === category_self) {
                                    return (
                                        <li
                                            key={category}
                                            className='cate_item main_row'
                                            onClick={() =>
                                                window.location.replace(
                                                    `/equipments/category/${category}`
                                                )
                                            }
                                        >
                                            {category}
                                        </li>
                                    )
                                }
                                return (
                                    <li
                                        key={category}
                                        className='row'
                                        onClick={() =>
                                            window.location.replace(
                                                `/equipments/category/${category}`
                                            )
                                        }
                                    >
                                        {category}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='countries'>
                        <div className='sidebar_header'>Countries</div>
                        <ul>
                            {countries.map((country) => {
                                return (
                                    <li key={country} className='row'>
                                        <input
                                            type='radio'
                                            name='type'
                                            value={country}
                                            onChange={handleChange}
                                        />
                                        {country}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='equipments'>
                        <div>
                            <input
                                className='search_input'
                                type='search'
                                placeholder='Search for Equipments'
                                name='searchTerm'
                                onChange={handleTextSearch}
                            ></input>
                            <button onClick={getEquipments} className='btn_sec'>
                                Refresh
                            </button>
                        
                            <div className='sort'>
                                {/* <ul>
                                    <li key='sortaz' className='column'> */}
                                <input
                                    type='radio'
                                    name='sorting'
                                    value='sortaz'
                                    onChange={handleSortAZ}
                                />
                                <label className='sort_label'>Sort A - Z</label>
                                {/* </li>
                                    <li key='sortza' className='column'> */}
                                <input
                                    type='radio'
                                    name='sorting'
                                    value='sortza'
                                    onChange={handleSortZA}
                                />
                                <label className='sort_label'>Sort Z - A</label>
                                {/* </li>
                                </ul> */}
                            </div>
                        </div>
                        <a href='/equipments/add' className='btn_sec'>
                            Add Equipment
                        </a>
                    </div>
                    <ul className="product_center">
                        {equipments.map((equipment) => {
                            return (
                                <Equipment
                                    key={equipment._id}
                                    {...equipment}
                                ></Equipment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category
