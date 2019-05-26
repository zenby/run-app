import React from 'react';

import filterImg from 'assets/icons/filter.png';

const InactiveFilterIcon = ({styleName, onClick}) => {
  return (
    <img src={filterImg} alt={'filter'} className={styleName} onClick={onClick}/>
  );
};

export default InactiveFilterIcon;
