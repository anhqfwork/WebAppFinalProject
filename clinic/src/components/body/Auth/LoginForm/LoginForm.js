import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './LoginForm.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext)
    //localState
    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const { email, password } = loginForm
    const onChangeLoginForm = (event) =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    const login = async (event) => {
        event.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success) {
            } else {
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login_container">
            {/* <div className="login_img">
                <img src="https://images.unsplash.com/photo-1595154038355-f717191eaab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                    alt="login_img"
                />
            </div> */}
            <div className="login_form">
                <h3>Login</h3>
                <Form className='my-4' onSubmit={login}>
                    <Form.Group>
                        <h4>Email address</h4>
                        <Form.Control
                            type='email'
                            placeholder='Enter email address'
                            name='email'
                            required
                            value={email}
                            onChange={onChangeLoginForm}
                            className="log_input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <h4>Password</h4>
                        <Form.Control
                            type='password'
                            placeholder='Enter your password'
                            name='password'
                            required
                            value={password}
                            onChange={onChangeLoginForm}
                            className="log_input"
                        />
                    </Form.Group>
                    <Button variant='success' type='submit' className="btn_prim log_btn">
                        Login
                    </Button>
                </Form>
                <p className="block">
                    Don't have an account? <span>
                    <Link to='/register'>
                        <Button variant='info' size='sm' className='register'>
                            Register
                        </Button>
                    </Link>
                    </span>
                </p>
            </div>
        </div>
        
    )
}

export default LoginForm
