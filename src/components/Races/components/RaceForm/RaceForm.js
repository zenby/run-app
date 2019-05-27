import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {getMilisecondsFromDate, getDateInSeconds, dateFormat} from 'utils/dateUtils';
import {updateRace, addRace} from 'utils/racesUtils';
import {run, ruleRunner} from 'utils/validation';
import {required, maxValue, minValue} from 'utils/validationRules';

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
    },
    errors: {}
  }

  componentDidMount() {
    this.setState({errors: run(this.state.race, validation)});
  }

  onChange = (ev) => {
    const {name, value} = ev.target;

    this.setState((state) => {
      const {race} = state;
      race[name] = +value;

      return {
        race,
        errors: run(race, validation)
      };
    });
  }

  saveJob = () => {
    const {race} = this.props;
    const {race: formRace} = this.state;

    if (race.user_id) {
      const isRaceChanged = Object.keys(formRace).some(key => race[key] !== formRace[key]);
      if (isRaceChanged) {
        updateRace(formRace)
          .then(this.goToRaces);
      }
    } else {
      addRace(formRace)
        .then(this.goToRaces);
    }
  }

  goToRaces = () => {
    const {closeRaceForm, syncRaces} = this.props;

    syncRaces();
    closeRaceForm();
  }

  changeDate = (date) => {
    this.setState((prevState) => {
      const {race} = prevState;
      race.date = getDateInSeconds(date);
      return {
        race,
        errors: run(race, validation)
      };
    });
  }

  render() {
    const {closeRaceForm} = this.props;
    const {race: {distance, time, date}, errors} = this.state;
    const isFormHasErrors = Object.values(errors).filter(Boolean).length;

    return (
      <div className={'race-form'}>
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
          {errors.distance && <div className={'validation-message'}>{errors.distance}</div>}
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
          {errors.time && <div className={'validation-message'}>{errors.time}</div>}
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
          {errors.date && <div className={'validation-message'}>{errors.date}</div>}
        </div>
        <button disabled={isFormHasErrors} className={'save-button'} onClick={this.saveJob}>Save</button>
      </div>
    );
  }
}

const validation = [
  ruleRunner('distance', 'distance', minValue(0), maxValue(10000), required),
  ruleRunner('time', 'time', minValue(0), maxValue(10000), required),
  ruleRunner('date', 'date', required)
];

export default RaceForm;
