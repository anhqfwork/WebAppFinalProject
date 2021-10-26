import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/body/Home/Home'
import Category from './components/body/Category/Category'
import Equipments from './components/body/Equipments/Equipments'
import Equipment from './components/body/Equipment/Equipment'
import Error from './components/body/Error/Error'
import AddEquipment from './components/body/AddEquipment/AddEquipment'
import EditEquipment from './components/body/EditEquipment/EditEquipment'

import Auth from './components/body/Auth/Auth'
import AuthContextProvider from './contexts/AuthContext'
import ProtectedRoute from './routing/ProtectedRoute'

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/login'
                        render={(props) => (
                            <Auth {...props} authRoute='login' />
                        )}
                    />
                    <Route
                        exact
                        path='/register'
                        render={(props) => (
                            <Auth {...props} authRoute='register' />
                        )}
                    />
                    <ProtectedRoute exact path='/' component={Home} />
                    <ProtectedRoute exact path='/equipments' component={Equipments}/>
                    <ProtectedRoute
                        exact
                        path='/equipments/add'
                        component={AddEquipment}
                    />
                    <ProtectedRoute
                        exact
                        path='/equipments/category/:category_self'
                        component={Category}
                    />
                    <ProtectedRoute
                        exact
                        path='/equipments/:id'
                        component={Equipment}
                    />
                    <ProtectedRoute
                        path='/equipments/:id/edit'
                        component={EditEquipment}
                    />
                    <ProtectedRoute path='*' components={Error} />
                </Switch>
            </Router>
        </AuthContextProvider>
    )
}

export default App
