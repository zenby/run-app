import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {getMilisecondsFromDate, getDateInSeconds, dateFormat} from 'utils/dateUtils';
import {updateRace, addRace} from 'utils/racesUtils';

import RaceFormCloseIcon from './components/RaceFormCloseIcon';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class RaceForm extends Component {
  state = {
    race: {
      distance: undefined,
      time: undefined,
      date: undefined,
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
    const {race: formRace} = this.state;
    closeRaceForm();

    if (race.user_id) {
      const isRaceChanged = Object.keys(formRace).some(key => race[key] !== formRace[key]);
      if (isRaceChanged) {
        updateRace(formRace);
        syncRaces();
      }
    } else {
      addRace(formRace);
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
          <div className={'row-label'}>Distance, km</div>
          <input
            name={'distance'}
            min={'0'}
            max={'10000'}
            value={distance || ''}
            onChange={this.onChange}
            type={'number'}
          />
        </div>
        <div className={'row'}>
          <div className={'row-label'}>Time, min</div>
          <input
            name={'time'}
            min={'0'}
            max={'10000'}
            value={time || ''}
            onChange={this.onChange}
            type={'number'}
          />
        </div>
        <div className={'row'}>
          <div className={'row-label'}>Date</div>
          <DatePicker
            name={'date'}
            dateFormat={dateFormat}
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
