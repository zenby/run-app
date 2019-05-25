import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from '../Login';
import Races from '../Races';

class Menu extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Races</Link>
            </li>
            <li>
              <Link to="/topics">Info</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/" component={Login}/>
          <Route path="/about" component={Races}/>
        </div>
      </Router>
    );
  }
}

export default Menu;
