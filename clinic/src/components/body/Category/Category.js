import React, { useState, useEffect } from 'react'
import './Category.css'
import { useParams } from 'react-router'
import { axios } from '../../../axios'

const Category = () => {
    const [categories, setCategories] = useState([])
    const [equipments, setEquipments] = useState([])
    const [countries, setCountries] = useState([])
    const [conditions, setConditions] = useState([])
    const [brands, setBrands] = useState([])

    const { category_self } = useParams()

    const [filterVariables, setFilterVariables] = useState({
        category: category_self,
        country: 'all',
        condition: 'all',
        brand: 'all',
    })

    const [sortVariable, setSortVariable] = useState('normal')

    const getCategories = async () => {
        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            const results = [
                ...new Set(
                    res.data.equipments.map((equipment) => {
                        return equipment.category
                    })
                ),
            ]
            setCategories(results)
        }
    }

    const getEquipments = async () => {
        const res = await axios
            .get('api/v1/equipment')
            .catch((err) => console.log(err))

        if (res && res.data) {
            // setEquipments(res.data.equipments)
            const newEquipments = res.data.equipments.filter((equipment) => {
                for (let key in filterVariables) {
                    if (
                        filterVariables[key] != 'all' &&
                        filterVariables[key] != equipment[key]
                    )
                        return false
                }
                return true
            })

            if (sortVariable === 'sortAZ') {
                const sortedEquipments = newEquipments.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    } else if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })
                setEquipments(sortedEquipments)
            } else if (sortVariable === 'sortZA') {
                const sortedEquipments = newEquipments.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })
                setEquipments(sortedEquipments)
            } else {
                setEquipments(newEquipments)
            }

            console.log(newEquipments)

            const newCountries = [
                ...new Set(
                    newEquipments.map((equipment) => {
                        return equipment.country
                    })
                ),
            ]
            console.log(newCountries)
            setCountries(newCountries)

            const newConditions = [
                ...new Set(
                    newEquipments.map((equipment) => {
                        return equipment.condition
                    })
                ),
            ]
            setConditions(newConditions)

            const newBrands = [
                ...new Set(
                    newEquipments.map((equipment) => {
                        return equipment.brand
                    })
                ),
            ]
            setBrands(newBrands)
        }
    }

    // init variables
    useEffect(() => {
        getEquipments()
        getCategories()
    }, [])

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

    const handleChangeFilter = (e, key) => {
        const newValue = e.target.value
        const newFilterVariales = filterVariables
        newFilterVariales[key] = newValue
        console.log(newFilterVariales)
        setFilterVariables(newFilterVariales)
        setSortVariable('normal')
        getEquipments()
    }

    const handleChangeSort = (e) => {
        const newSort = e.target.value
        console.log(newSort)
        setSortVariable(newSort)
        getEquipments()
    }

    // Equipment Box
    const Equipment = (equipment) => {
        return (
            <li className='product_item'>
                <a href={`/equipments/${equipment._id}`}>
                    <img className='item-image' src={equipment.img} alt='' />
                </a>
                <div className='product_info'>
                    <h5>{equipment.name}</h5>
                    <p>
                        Country: <span>{equipment.country}</span>
                    </p>
                </div>
            </li>
        )
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
                    <div className='radio-filter'>
                        <div className='sidebar_header'>Countries</div>
                        <ul>
                            <li key='all' className='row'>
                                <input
                                    type='radio'
                                    name='country'
                                    value='all'
                                    checked={
                                        filterVariables['country'] === 'all'
                                    }
                                    onChange={(e) =>
                                        handleChangeFilter(e, 'country')
                                    }
                                />
                                &nbsp;&nbsp;All
                            </li>
                            {countries.map((country) => {
                                return (
                                    <li key={country} className='row'>
                                        <input
                                            type='radio'
                                            name='country'
                                            value={country}
                                            checked={
                                                filterVariables['country'] ===
                                                country
                                            }
                                            onChange={(e) =>
                                                handleChangeFilter(e, 'country')
                                            }
                                        />
                                        &nbsp;&nbsp;{country}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='radio-filter'>
                        <div className='sidebar_header'>Conditions</div>
                        <ul>
                            <li key='all' className='row'>
                                <input
                                    type='radio'
                                    name='condition'
                                    value='all'
                                    checked={
                                        filterVariables['condition'] === 'all'
                                    }
                                    onChange={(e) =>
                                        handleChangeFilter(e, 'condition')
                                    }
                                />
                                &nbsp;&nbsp;All
                            </li>
                            {conditions.map((condition) => {
                                return (
                                    <li key={condition} className='row'>
                                        <input
                                            type='radio'
                                            name='condition'
                                            value={condition}
                                            checked={
                                                filterVariables['condition'] ===
                                                condition
                                            }
                                            onChange={(e) =>
                                                handleChangeFilter(
                                                    e,
                                                    'condition'
                                                )
                                            }
                                        />
                                        &nbsp;&nbsp;{condition}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='radio-filter'>
                        <div className='sidebar_header'>Brands</div>
                        <ul>
                            <li key='all' className='row'>
                                <input
                                    type='radio'
                                    name='brand'
                                    value='all'
                                    checked={filterVariables['brand'] === 'all'}
                                    onChange={(e) =>
                                        handleChangeFilter(e, 'brand')
                                    }
                                />
                                &nbsp;&nbsp;All
                            </li>
                            {brands.map((brand) => {
                                return (
                                    <li key={brand} className='row'>
                                        <input
                                            type='radio'
                                            name='brand'
                                            value={brand}
                                            checked={
                                                filterVariables['brand'] ===
                                                brand
                                            }
                                            onChange={(e) =>
                                                handleChangeFilter(e, 'brand')
                                            }
                                        />
                                        &nbsp;&nbsp;{brand}
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
                                <input
                                    type='radio'
                                    name='sorting'
                                    value='normal'
                                    checked={sortVariable === 'normal'}
                                    onChange={handleChangeSort}
                                />
                                <label className='sort_label'>Normal</label>
                                <input
                                    type='radio'
                                    name='sorting'
                                    value='sortAZ'
                                    checked={sortVariable === 'sortAZ'}
                                    onChange={handleChangeSort}
                                />
                                <label className='sort_label'>Sort A - Z</label>
                                <input
                                    type='radio'
                                    name='sorting'
                                    value='sortZA'
                                    checked={sortVariable === 'sortZA'}
                                    onChange={handleChangeSort}
                                />
                                <label className='sort_label'>Sort Z - A</label>
                            </div>
                        </div>
                        <a href='/equipments/add' className='btn_sec'>
                            Add Equipment
                        </a>
                    </div>
                    <ul className='product_center'>
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
