import React, { Component } from 'react';
import './css/index.css';
import {Route, Link} from 'react-router-dom';
import Resume from './components/resume';
import Home from './components/home';
import NavBarHome from './components/nav-bar-home';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="app-div">

        <Route path="/resume" render={Resume}></Route>
        <Route path="/" exact render={Home}></Route>
        <Footer />
      </div>

    );
  }
}

export default App;
