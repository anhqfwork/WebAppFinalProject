import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/body/Home/Home';
import Category from './components/body/Category/Category'
import Equipments from './components/body/Equipments/Equipments';
import Equipment from './components/body/Equipment/Equipment';
import Error from './components/body/Error/Error';
import AddEquipment from './components/body/AddEquipment/AddEquipment';
import EditEquipment from './components/body/EditEquipment/EditEquipment';
import Header from './components/header/Header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/equipments'>
          <Equipments />
        </Route>
        <Route exact path='/equipments/add'>
          <AddEquipment/>
        </Route>
        <Route path='/equipments/category/:category_self' children={<Category />}></Route>
        <Route exact path='/equipments/:id' children={<Equipment />}></Route>
        <Route path='/equipments/:id/edit'>
          <EditEquipment />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
