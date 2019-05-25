import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Menu from './components/Menu';
import Header from './components/Header';
import Login from './components/Login';
import Races from './components/Races';

import './App.css';

class App extends Component {
  state = {
    isMenuOpened: false
  }

  openMenu = () => {
    this.setState({isMenuOpened: true});
  };

  closeMenu = () => this.setState({isMenuOpened: false});

  render() {
    const {isMenuOpened} = this.state;

    return (
      <Router>
        {isMenuOpened
          ? <Menu closeMenu={this.closeMenu}/>
          : <div>
            <Header openMenu={this.openMenu}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/jogs" component={Races}/>
          </div>}
      </Router>
    );
  }
}

export default App;
