import React, {Component, Fragment} from 'react';
import {getRaces} from 'utils/racesUtils';

import Filter from './components/Filter';
import EmptyList from './components/EmptyList';
import RaceForm from './components/RaceForm';
import Race from './components/Race';

class Races extends Component {
  state = {
    races: [],
    filter: {
      startDate: undefined,
      endDate: undefined
    },
    isRaceFormOpened: false,
    selectedRace: {}
  }

  componentDidMount() {
    this.syncRaces();
  }

  changeFilterDate = (date, filterName) => {
    this.setState({
      filter: {
        ...this.state.filter,
        [filterName]: date
      }
    });
  }

  closeRaceForm = () => {
    this.setState({isRaceFormOpened: false, selectedRace: {}});
  }

  selectRace = (race) => {
    this.setState({isRaceFormOpened: true, selectedRace: race});
  }

  filterRaces = (race) => {
    const {startDate, endDate} = this.state.filter;
    if (startDate && startDate > race.date) return false;
    if (endDate && endDate < race.date) return false;
    return true;
  }

  syncRaces = () => {
    getRaces().then(races => this.setState({races}));
  }

  render() {
    const {races, filter, isRaceFormOpened, selectedRace} = this.state;
    const {isRaceFilterShown} = this.props;

    return (
      !isRaceFormOpened
        ? <Fragment>
          {isRaceFilterShown && <Filter filter={filter} changeFilterDate={this.changeFilterDate}/>}
          {races.length
            ? races
              .filter(this.filterRaces)
              .map(race => <Race race={race} key={race.id} onRaceClick={this.selectRace}/>)
            : <EmptyList/>}
        </Fragment>
        : <RaceForm race={selectedRace} closeRaceForm={this.closeRaceForm} syncRaces={this.syncRaces}/>
    );
  }
}

export default Races;
