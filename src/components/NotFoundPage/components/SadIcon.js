import React from 'react';

import image from 'assets/icons/sad-emotion.png';

const SadIcon = ({styleName}) => {
  return (
    <img src={image} alt={'sad'} className={styleName}/>
  );
};

export default SadIcon;
