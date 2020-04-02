import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  Auth,
  Home,
  NotFound
} from './pages'

const App = () => {
  return (
    <Router>
      <div className = "wrapper">
        <Route exact path={["/", "/login", "/register"]} component={Auth} />
        <Route exact path="/im" component={Home} /> 
      </div>
    </Router>
  )
}

export default App

