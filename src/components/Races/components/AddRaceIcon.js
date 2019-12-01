import React from 'react';

import img from 'assets/icons/add.png';

const AddRaceIcon = ({styleName, onClick}) => {
  return (
    <img src={img} alt={'add'} className={styleName} onClick={onClick}/>
  );
};

export default AddRaceIcon;
