import React from 'react';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Register from './pages/Register'
import Rules from './pages/Rules'


const App=()=> {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/rules' component={Rules}/>
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
