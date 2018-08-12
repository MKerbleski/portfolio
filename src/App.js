import React, { Component } from 'react';
import './css/index.css';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app-div">

        <header>
          <div className="all-contact-tabs">
            <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />
            <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />
            <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />

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

        <footer>
          <div className="copyright">Copyright: Michael Kerbleski</div>
          <div className="last-update">Last Update:{}</div>
        </footer>

      </div>

    );
  }
}

export default App;
