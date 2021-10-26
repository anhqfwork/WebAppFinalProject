import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { isAuthenticated },
    } = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (isAuthenticated) {
                        return (
                            <>
                                <Header />
                                <Component {...rest} {...props} />
                                <Footer />
                            </>
                        )
                    } else {
						return <Redirect to='/login' />
                    }
                }
                // isAuthenticated ? (
                // 	<>
                // 		<Component {...rest} {...props} />
                // 	</>
                // ) : (
                // 	<Redirect to='/login' />
                // )
            }
        />
    )
}

export default ProtectedRoute
