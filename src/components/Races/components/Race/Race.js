import React, {Component} from 'react';
import moment from 'moment';

import RaceIcon from './components/RaceIcon';

import './style.css';

class Race extends Component {

  render() {
    const {race: {date, distance, time}} = this.props;
    const speed = Math.floor(distance / time * 60 * 10) / 10;

    return (
      <div className={'race'}>
        <div>
          <RaceIcon/>
        </div>
        <div className={'race-info'}>
          <div className={'row label'}>{moment(date * 1000).format('DD.MM.YYYY')}</div>
          <div className={'row'}>Speed: <span className={'label'}>{speed} km/h</span></div>
          <div className={'row'}>Distance: <span className={'label'}>{distance} km</span></div>
          <div>Time: <span className={'label'}>{time} min</span></div>
        </div>
      </div>
    );
  }
}

export default Race;
