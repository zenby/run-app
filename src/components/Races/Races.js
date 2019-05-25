import React, {Component} from 'react';
import {getRaces} from 'utils/racesUtils';

import Filter from './components/Filter';
import Race from './components/Race';

class Races extends Component {
  state = {races: []}

  componentDidMount() {
    getRaces().then(races => this.setState({races}));
  }

  render() {
    const {races} = this.state;

    return (
      <div>
        <Filter/>
        {races.map(race => <Race race={race} key={race.id}/>)}
      </div>
    );
  }
}

export default Races;
