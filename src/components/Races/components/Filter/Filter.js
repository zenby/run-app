import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {getDateInSeconds, getMilisecondsFromDate, dateFormat} from 'utils/dateUtils';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class Filter extends Component {

  changeEndDate = (date) => this.props.changeFilterDate(getDateInSeconds(date), 'endDate');

  changeStartDate = (date) => this.props.changeFilterDate(getDateInSeconds(date), 'startDate');

  render() {
    const {filter} = this.props;

    return (
      <div className={'filter'}>
        <div className={'filter-item'}>
          <span>Date from</span>
          <DatePicker
            name={'startDate'}
            dateFormat={dateFormat}
            value={getMilisecondsFromDate(filter.startDate)}
            maxDate={getMilisecondsFromDate(filter.endDate)}
            className={'date-input'}
            selected={getMilisecondsFromDate(filter.startDate)}
            onChange={this.changeStartDate}
          />
        </div>
        <div className={'filter-item'}>
          <span>Date to</span>
          <DatePicker
            name={'endDate'}
            dateFormat={dateFormat}
            value={getMilisecondsFromDate(filter.endDate)}
            minDate={getMilisecondsFromDate(filter.startDate)}
            className={'date-input'}
            popperClassName={'right-popper-picker'}
            popperPlacement={'bottom-end'}
            selected={getMilisecondsFromDate(filter.endDate)}
            onChange={this.changeEndDate}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
