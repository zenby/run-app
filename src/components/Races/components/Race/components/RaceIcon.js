import React from 'react';

import raceImg from 'assets/icons/race.png';

const RaceIcon = ({onClick}) => {
  return (
    <img src={raceImg} alt={'cancel'} onClick={onClick}/>
  );
};

export default RaceIcon;
