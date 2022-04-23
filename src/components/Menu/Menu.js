import React from 'react';
import {Link} from 'react-router-dom';

import CancelIcon from './components/CancelIcon';
import GreenLogoIcon from './components/GreenLogoIcon';

import './style.css';

const Menu = ({closeMenu}) => (

  <div className={'menu'}>
    <div className={'menu-header'}>
      <GreenLogoIcon/>
      <CancelIcon onClick={closeMenu}/>
    </div>
    <div>

      <ul>
        <li>
          <Link to="/jogs" onClick={closeMenu}>jogs</Link>
        </li>
        <li>
          <Link to="/info" onClick={closeMenu}>info</Link>
        </li>
        <li>
          <Link to="/topics" onClick={closeMenu}>contact us</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
