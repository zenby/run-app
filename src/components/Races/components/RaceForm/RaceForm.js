import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {getMilisecondsFromDate, getDateInSeconds} from 'utils/dateUtils';
import {updateRace} from 'utils/racesUtils';

import RaceFormCloseIcon from './components/RaceFormCloseIcon';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class RaceForm extends Component {
  state = {
    race: {
      ...this.props.race
    }
  }

  onChange = (ev) => {
    const {name, value} = ev.target;
    this.setState({
      race: {
        ...this.state.race,
        [name]: +value
      }
    });
  }

  saveJob = () => {
    const {closeRaceForm, syncRaces, race} = this.props;
    closeRaceForm();

    const isRaceChanged = Object.keys(race).some(key => race[key] !== this.state.race[key]);
    if (isRaceChanged) {
      updateRace(this.state.race);
      syncRaces();
    }
  }

  changeDate = (date) => {
    this.setState({
      race: {
        ...this.state.race,
        date: getDateInSeconds(date)
      }
    });
  }

  render() {
    const {closeRaceForm} = this.props;
    const {race: {distance, time, date}} = this.state;

    return (
      <form className={'race-form'}>
        <RaceFormCloseIcon onClick={closeRaceForm}/>
        <div className={'row'}>
          Distance
          <input
            name={'distance'}
            min={'0'}
            max={'10000'}
            value={distance}
            onChange={this.onChange}
            type={'number'}
          />
        </div>
        <div className={'row'}>
          Time
          <input
            name={'time'}
            min={'0'}
            max={'10000'}
            value={time}
            onChange={this.onChange}
            type={'number'}
          />
        </div>
        <div className={'row'}>
          Date
          <DatePicker
            name={'startDate'}
            value={getMilisecondsFromDate(date)}
            selected={getMilisecondsFromDate(date)}
            onChange={this.changeDate}
          />
        </div>
        <button className={'save-button'} onClick={this.saveJob}>Save</button>
      </form>
    );
  }
}

export default RaceForm;
