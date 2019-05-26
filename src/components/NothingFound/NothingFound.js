import React from 'react';

import SadIcon from './components/SadIcon';
import './style.css';

const NothingFound = () => {
  return (
    <div className={'nothing-found-container'}>
      <SadIcon styleName={'sad-icon'}/>
      <div className={'nothing-found-label'}>
        Nothing is there
      </div>
    </div>
  );
};

export default NothingFound;
