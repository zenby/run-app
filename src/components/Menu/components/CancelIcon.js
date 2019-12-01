import React from 'react';

import cancelImg from 'assets/icons/cancel.png';

const CancelIcon = ({onClick}) => {
  return (
    <img src={cancelImg} alt={'cancel'} onClick={onClick} style={{height: '21px', cursor: 'pointer'}}/>
  );
};

export default CancelIcon;
