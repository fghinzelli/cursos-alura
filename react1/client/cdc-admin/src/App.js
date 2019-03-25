import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import AutorBox from './componentes/Autor';
import {BrouserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {
  
  render() {
    return (
      <div id="layout">
        <Router >
          <a href="#menu" id="menuLink" className="menu-link">
              <span></span>
          </a>

          <div id="menu">
              <div className="pure-menu">
                  <a className="pure-menu-heading" href="#">Company</a>

                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><Link to="/">Home</Link></li>
                      <li className="pure-menu-item"><Link to='/autor'>Autor</Link></li>
                      <li className="pure-menu-item"><Link to='/livros'>Livros</Link></li>
                  </ul>
              </div>
          </div>

          <div id="main">
            <Route exact path='/'>
            <div className="header">
                  <h1>Bem vindo ao sistema</h1>
              </div>
            </Route>
            <Route path="/autor" component={AutorBox}></Route>
          </div>
          </Router>
      </div>
      
    );
  }
}

export default App;
