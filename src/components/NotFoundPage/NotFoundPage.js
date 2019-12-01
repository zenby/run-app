import React from 'react';
import {Link} from 'react-router-dom';
import Media from 'react-media';

import SadIcon from './components/SadIcon';
import BigSadIcon from './components/BigSadIcon';

import './style.css';

const NotFoundPage = () => {
  return (
    <div className={'not-found-page'}>
      <div className={'not-found-container'}>
        <Media query="(min-width: 600px)">
          {matches => matches ? <BigSadIcon styleName={'sad-icon'}/> : <SadIcon styleName={'sad-icon'}/>}
        </Media>
        <div className={'not-found-label'}>
          Nothing is there
        </div>
      </div>
      <Link className={'action-button'} to={'/jogs'}>
        Create your jog first
      </Link>
    </div>
  );
};

export default NotFoundPage;
