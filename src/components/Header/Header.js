import React, {Component, Fragment} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Media from 'react-media';

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

  getNavLinkClassName = (navPath) => {
    const isCurrentPathSelected = navPath === this.props.location.pathname;
    return `nav-link${isCurrentPathSelected ? ' nav-link-active' : ''}`;
  }

  render() {
    const {openMenu, location} = this.props;
    const isRacesPage = location.pathname === '/jogs';

    return (
      <div className={'header'}>
        <LogoIcon/>
        <div className={'nav-container'}>
          <Media query="(min-width: 600px)">
            {matches => matches
              ? <Fragment>
                <Link className={this.getNavLinkClassName('/jogs')} to={'/jogs'}>jogs</Link>
                <Link className={this.getNavLinkClassName('/info')} to={'/info'}>info</Link>
                <Link className={this.getNavLinkClassName('/contact')} to={'/contact'}>contact us</Link>
              </Fragment>
              : null}
          </Media>
          <div className={'nav-container icons-container'}>
            {isRacesPage && this.renderFilterIcon()}
            <Media query="(min-width: 600px)">
              {matches => matches ? null : <MenuIcon onMenuClick={openMenu}/>}
            </Media>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
