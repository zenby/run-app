import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class Filter extends Component {

  changeDate = () => {

  }

  render() {

    return (
      <div className={'filter'}>
        <div className={'filter-item'}>
          <span>Date from</span>
          <DatePicker
            className={'date-input'}
            selected={Date.now()}
            onChange={this.changeDate}
          />
        </div>
        <div className={'filter-item'}>
          <span>Date to</span>
          <DatePicker
            className={'date-input'}
            popperClassName={'right-popper-picker'}
            popperPlacement={'bottom-end'}
            selected={Date.now()}
            onChange={this.changeDate}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
