import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {

  return (
    <Router>
      <Contact/>
      <Switch>
        <div className="App">
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/projects"><Projects/></Route>
        </div>
      </Switch>
    </Router>
  )
}

export default App;
