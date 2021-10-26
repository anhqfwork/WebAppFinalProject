import React, { useState, useEffect, useContext } from 'react'
import { FaBars, FaUserMinus } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
// import Navbar from '../Navbar/Navbar'
import './Header.css'
import { AuthContext } from '../../contexts/AuthContext'

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)
    const {
        authState: {
            user: { name }
        },
        logoutUser
    } = useContext(AuthContext)

    const logOut = () => logoutUser()
    return (
        // <div className="header">
        //     <div className="header-logo">
        //         <a href="/">
        //             <img src="https://i.im.ge/2021/10/25/oU5aG0.png" alt="logo" className="logo"/>
        //             <h5>Clinical</h5>
        //         </a>
        //     </div>
        //     <div className="header-navbar">
        //         <Navbar />
        //     </div>
        // </div>
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <a href='/'>
                        <img src={logo} alt='logo' className='logo' />
                    </a>
                    <button
                        className='nav-toggle'
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars />
                    </button>
                </div>
                
                <div
                    className={`${
                        showLinks
                            ? 'links-container show-container'
                            : 'links-container'
                    }`}
                >
                    <ul className='links'>
                        <li>
                            <a href='/'>home</a>
                        </li>
                        <li>
                            <a href='/equipments'>equipments</a>
                        </li>
                    </ul>
                </div>
                <div className="user_container"> 
                    <a>Hello, {name}</a>
                    <a href='/login' onClick={logOut}>Logout <FaUserMinus /></a>
                </div>
            </div>
        </nav>
    )
}

export default Header
