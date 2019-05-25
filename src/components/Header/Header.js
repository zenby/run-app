import React, {Component} from 'react';

import LogoIcon from './components/LogoIcon';
import MenuIcon from './components/MenuIcon';

import './style.css';

class Header extends Component {

  render() {
    const {openMenu} = this.props;

    return (
      <div className={'header'}>
        <LogoIcon/>
        <MenuIcon onMenuClick={openMenu}/>
      </div>
    );
  }
}

export default Header;
