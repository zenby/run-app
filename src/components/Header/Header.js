import React, {Component} from 'react';

import Logo from './components/Logo';
import Menu from './components/Menu';

import './style.css';

class Header extends Component {

  render() {
    return (
      <div className={'header'}>
        <Logo/>
        <Menu/>
      </div>
    );
  }
}

export default Header;
