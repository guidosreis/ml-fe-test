import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './core/Header'
import Home from './pages/Home'
import Results from './pages/Results'
import Product from './pages/Product'

// import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/results" component={Results} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
