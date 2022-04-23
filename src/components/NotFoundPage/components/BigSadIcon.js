import React from 'react';

import image from 'assets/icons/big-sad-imotion.png';

const BigSadIcon = ({styleName}) => {
  return (
    <img src={image} alt={'sad'} className={styleName}/>
  );
};

export default BigSadIcon;
