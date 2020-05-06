import React from 'react';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/header/Header'


const App=()=> {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
