import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
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
        <>
            <Form className='my-4' onSubmit={register}>
                <Form.Group>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        required
                        value={email}
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='firstName'
                        name='firstName'
                        required
                        value={firstName}
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='lastName'
                        name='lastName'
                        required
                        value={lastName}
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>
                <Button variant='success' type='submit'>
                    Register
                </Button>
            </Form>
            <p>
                Already have an account?
                <Link to='/login'>
                    <Button variant='info' size='sm' className='ml-2'>
                        Login
                    </Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm
