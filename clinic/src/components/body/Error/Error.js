import React from 'react'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <h3>Sorry, the page you tried cannot be found</h3>
            <ul>
                <a href='/' className='btn_prim error_btn'>
                    Go to Home
                </a>
            </ul>
        </div>
    )
}

export default Error
