import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

const RegisterForm = () => {
    const { registerUser } = useContext(AuthContext)
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })
    const { email, password, firstName, lastName } = registerForm
    const onChangeRegisterForm = (event) =>
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value,
        })
    const register = async (event) => {
        event.preventDefault()
        try {
            const registerData = await registerUser(registerForm)
            console.log(registerData)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login_container">
            <div className="register_form">
                <h3>Register</h3>
                <Form className='my-4' onSubmit={register}>
                    <Form.Group>
                        <h4>Email address</h4>
                        <Form.Control
                            type='email'
                            placeholder='Enter email address'
                            name='email'
                            required
                            value={email}
                            onChange={onChangeRegisterForm}
                            className="log_input"
                        />
                    </Form.Group>

                    <Form.Group>
                        <h4>Password</h4>
                        <Form.Control
                            type='password'
                            placeholder='Create password'
                            name='password'
                            required
                            value={password}
                            onChange={onChangeRegisterForm}
                            className="log_input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <h4>First Name</h4>
                        <Form.Control
                            type='text'
                            placeholder='Enter your first name'
                            name='firstName'
                            required
                            value={firstName}
                            onChange={onChangeRegisterForm}
                            className="log_input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <h4>Last Name</h4>
                        <Form.Control
                            type='text'
                            placeholder='Enter your last name'
                            name='lastName'
                            required
                            value={lastName}
                            onChange={onChangeRegisterForm}
                            className="log_input"
                        />
                    </Form.Group>
                    <Button variant='success' type='submit' className="btn_prim log_btn">
                        Register
                    </Button>
                </Form>
                <p className="block">
                    Already have an account? <span>
                    <Link to='/login'>
                        <Button variant='info' size='sm' className='login'>
                            Login
                        </Button>
                    </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default RegisterForm
