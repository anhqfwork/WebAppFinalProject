import { Route, Redirect } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/body/Home/Home'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { isAuthenticated, authLoading },
    } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (authLoading) {
                        return null
                    }
                    else if (isAuthenticated) {
                        return (
                            <>
                                <Header />
                                <Component {...rest} {...props} />
                                <Footer />
                            </>
                        )
                    } else {
                        return (<Redirect to='/login' />)
                    }
                }
            }
        />
    )
}

export default ProtectedRoute
