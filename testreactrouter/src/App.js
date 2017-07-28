import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          </nav>
        </div>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;
