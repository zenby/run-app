import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import LogoIcon from './components/LogoIcon';
import MenuIcon from './components/MenuIcon';
import ActiveFilterIcon from './components/ActiveFilterIcon';
import InactiveFilterIcon from './components/InactiveFilterIcon';

import './style.css';

class Header extends Component {

  renderFilterIcon = () => {
    const {toggleRaceFilter} = this.props;

    return this.props.isRaceFilterShown
      ? <ActiveFilterIcon styleName={'active-filter'} onClick={toggleRaceFilter}/>
      : <InactiveFilterIcon styleName={'inactive-filter'} onClick={toggleRaceFilter}/>;
  }

  render() {
    const {openMenu, location} = this.props;
    const isRacesPage = location.pathname === '/jogs';

    return (
      <div className={'header'}>
        <LogoIcon/>
        <div className={'icons-container'}>
          {isRacesPage && this.renderFilterIcon()}
          <MenuIcon onMenuClick={openMenu}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
