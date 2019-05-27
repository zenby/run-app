import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';
import SadIcon from './components/SadIcon';

const NotFoundPage = () => {
  return (
    <div className={'not-found-page'}>
      <div className={'not-found-container'}>
        <SadIcon styleName={'sad-icon'}/>
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
