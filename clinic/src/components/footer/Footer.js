import React from 'react'
import './Footer.css'
import {
    FaFacebook,
    FaTwitter,
    FaInstagramSquare,
    FaPinterest,
    FaLocationArrow,
    FaPhone,
    FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
    return (
        // <div className='footer'>
        //     <div className='footer-top'>Make With Popcorns!</div>
        //     <hr />
        //     <div className='footer-bottom'>
        //         <div className='footer-contact'>
        //             USTH, A21 Bulding, Vietnam Academy of Science and Technology <br/>
        //             Address: 18 Hoang Quoc Viet, Cau Giay District, Hanoi <br />
        //             Tel: (+84- 24) 37 91 69 60
        //         </div>
        //         <div className='footer-members'>
        //             Nguyen Xuan Tung <br />
        //             Tran Hong Quan <br />
        //             Lu Khanh Huyen <br />
        //             Vu Duc Chinh <br />
        //             Nguyen Quang Anh <br />
        //         </div>
        //     </div>
        // </div>
        <footer>
            <div className='bottom_border'>
                <div className='footer-center'>
                    <div style={{ textAlign: 'left', width: '50%' }}>
                        <h5>Find us</h5>
                        <p>
                            USTH, A21 Bulding, Vietnam Academy of Science and
                            Technology
                        </p>
                        <p>
                            <FaLocationArrow /> 18 Hoang Quoc Viet, Cau Giay
                            District, Hanoi{' '}
                        </p>
                        <p>
                            <FaPhone /> +84-24 37 91 69 60{' '}
                        </p>
                        <p>
                            <FaEnvelope /> officeusth@usth.edu.vn{' '}
                        </p>
                    </div>
                    {/* <div style={{textAlign:'left'}}>
                        <h5>Help</h5>
                        <ul className="footer_ul">
                            <li><a href="/">Store Location</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Hollow Man Montage</a></li>
                            <li><a href="/">Ebay & Amazon</a></li>
                            <li><a href="/">Shipping Information</a></li>
                            <li><a href="/">Orders & Returns</a></li>
                        </ul>
                        
                    </div> */}
                    <div style={{ textAlign: 'left' }}>
                        <h5>Support</h5>
                        <ul className='footer_ul'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/about'>About us</a>
                            </li>
                            <li>
                                <a href='/equipments'>Equipments</a>
                            </li>
                            <li>
                                <a href='/login'>Login & Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className='footer_bottom_ul'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/equipments'>Products</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                </ul>
                <p style={{ textAlign: 'center' }}>
                    Copyright @2021 | Designed With by{' '}
                    <a href='/' className='groupID'>
                        Group 5
                    </a>
                </p>
                <ul className='footer_bottom_ul'>
                    <li>
                        <a href='https://www.facebook.com/'>
                            <FaFacebook />
                        </a>
                        <a href='https://twitter.com/'>
                            <FaTwitter />
                        </a>
                        <a href='https://www.instagram.com/'>
                            <FaInstagramSquare />
                        </a>
                        <a href='https://www.pinterest.com/'>
                            <FaPinterest />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
