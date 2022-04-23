import React from 'react';

import menuImg from 'assets/icons/menu.png';

const MenuIcon = ({onMenuClick}) => {
  return (
    <img src={menuImg} alt={'menu'} onClick={onMenuClick} style={{cursor: 'pointer'}}/>
  );
};

export default MenuIcon;
