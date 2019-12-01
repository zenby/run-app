import React from 'react';
import moment from 'moment';

import RaceIcon from './components/RaceIcon';

import './style.css';

const Race = ({race, onRaceClick}) => {
  const onClick = () => onRaceClick(race);

  const {date, distance, time} = race;
  const speed = time === 0 ? '∞' : Math.floor(distance / time * 60 * 10) / 10;

  return (
    <div className={'race'} onClick={onClick}>
      <RaceIcon/>
      <div className={'race-info'}>
        <div className={'row label'}>{moment(date * 1000).format('DD.MM.YYYY')}</div>
        <div className={'row'}>Speed: <span className={'label'}>{speed} km/h</span></div>
        <div className={'row'}>Distance: <span className={'label'}>{distance} km</span></div>
        <div>Time: <span className={'label'}>{time} min</span></div>
      </div>
    </div>
  );
};

export default Race;
