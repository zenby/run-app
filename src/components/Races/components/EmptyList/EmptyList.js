import React from 'react';
import NothingFound from 'components/NothingFound';

import './style.css';

const EmptyList = () => {
  return (
    <div className={'empty-list'}>
      <NothingFound/>
      <button className={'action-button'}>
        Create your jog first
      </button>
    </div>
  );
};

export default EmptyList;
