import React from 'react';

import img from 'assets/icons/white-cancel.png';

const RaceFormCloseIcon = ({onClick}) => {
  return (
    <img
      src={img}
      alt={'cancel'}
      onClick={onClick}
      style={{
        top: '21px',
        right: '21px',
        cursor: 'pointer',
        position: 'absolute'
      }}
    />
  );
};

export default RaceFormCloseIcon;
