import React from 'react';

import filterImg from 'assets/icons/filterActive.png';

const ActiveFilterIcon = ({styleName, onClick}) => {
  return (
    <img src={filterImg} alt={'filter'} className={styleName} onClick={onClick}/>
  );
};

export default ActiveFilterIcon;
