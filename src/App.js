import React from 'react';
import './App.css';

import {Switch, Route} from "react-router-dom"

import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {

  return (
        <div className="App">
          <Contact/>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/projects" component={Projects}></Route>
          </Switch>
        </div>
  )
}

export default App;
