import React from 'react';
import DatePicker from 'react-datepicker';
import {getDateInSeconds, getMilisecondsFromDate, dateFormat} from 'utils/dateUtils';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

const Filter = ({changeFilterDate, filter}) => {

  const changeEndDate = (date) => changeFilterDate(getDateInSeconds(date), 'endDate');

  const changeStartDate = (date) => changeFilterDate(getDateInSeconds(date), 'startDate');

  const filterStartDate = getMilisecondsFromDate(filter.startDate);
  const filterEndDate = getMilisecondsFromDate(filter.endDate);

  return (
    <div className={'filter'}>
      <div className={'filter-item'}>
        <span>Date from</span>
        <DatePicker
          name={'startDate'}
          dateFormat={dateFormat}
          value={filterStartDate}
          maxDate={filterEndDate}
          className={'date-input'}
          selected={filterStartDate}
          onChange={changeStartDate}
        />
      </div>
      <div className={'filter-item'}>
        <span>Date to</span>
        <DatePicker
          name={'endDate'}
          dateFormat={dateFormat}
          value={filterEndDate}
          minDate={filterStartDate}
          className={'date-input'}
          popperClassName={'right-popper-picker'}
          popperPlacement={'bottom-end'}
          selected={filterEndDate}
          onChange={changeEndDate}
        />
      </div>
    </div>
  );
};

export default Filter;
