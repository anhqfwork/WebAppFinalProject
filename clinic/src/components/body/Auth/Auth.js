import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'

const Auth = ({ authRoute }) => {
    const {
        authState: { isAuthenticated },
    } = useContext(AuthContext)
    let body
    if (isAuthenticated) {
        return <Redirect to='/' />
    } else {
        body = (
            <>
                {authRoute === 'login' && <LoginForm />}
                {authRoute === 'register' && <RegisterForm />}
            </>
        )
    }

    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>{body}</div>
            </div>
        </div>
    )
}

export default Auth
