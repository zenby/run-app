import React, {Component} from 'react';
import {getRaces} from 'utils/racesUtils';

import Filter from './components/Filter';
import Race from './components/Race';

class Races extends Component {
  state = {
    races: [],
    filter: {
      startDate: undefined,
      endDate: undefined
    }
  }

  componentDidMount() {
    getRaces().then(races => this.setState({races}));
  }

  changeFilterDate = (date, filterName) => {
    this.setState({
      filter: {
        ...this.state.filter,
        [filterName]: date
      }
    });
  }

  render() {
    const {races, filter} = this.state;
    const {startDate, endDate} = filter;

    return (
      <div>
        <Filter filter={filter} changeFilterDate={this.changeFilterDate}/>
        {races
          .filter(race => {
            if (startDate && startDate > race.date) return false;
            if (endDate && endDate < race.date) return false;
            return true;
          })
          .map(race => <Race race={race} key={race.id}/>)}
      </div>
    );
  }
}

export default Races;
