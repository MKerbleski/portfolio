import React, { Component } from 'react';
import './css/index.css';
import {Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app-div">

        <header>
          <div className="all-contact-tabs">
            <div className="logo" href="https://angel.co/kerbleski"><i class="fab fa-angellist"></i></div>
            <div className="logo" href="https://twitter.com/kerbleski"><i class="fab fa-twitter"></i></div>
            <div className="logo" href="https://github.com/kerbleski"><i class="fab fa-github"></i></div>--
            <div className="logo"><i class="far fa-moon"></i></div>
            <div className="logo"><i class="far fa-sun"></i></div>

          </div>
        </header>


        <div className="main">
          <div className="title"><h1><mi>MI</mi><ke>KE</ke>RBLESKI</h1></div>
          <div className="all-links">
            <Link className="link" to="/resume">resume</Link>
            <Link className="link" to="/current-project">current-project</Link>
            <Link className="link" to="/web-portfolio">web-portfolio</Link>
            <Link className="link" to="/media-portfolio">media-portfolio</Link>
          </div>
        </div>

        {/* <Route path="/">

        </Route> */}

        <footer>
          <div className="copyright">Copyright: Michael Kerbleski</div>
          <div className="last-update">Last Update:{}</div>
        </footer>

      </div>

    );
  }
}

export default App;
