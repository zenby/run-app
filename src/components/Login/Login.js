import React, {Component} from 'react';
import {loginUser} from 'utils/loginUtils';
import {withRouter} from 'react-router-dom';

import BearIcon from './components/BearIcon';

import './style.css';

class Login extends Component {

  loginUser = () => {
    loginUser()
      .then(() => {
        this.props.setRegisteredUser();
        this.props.history.push('/jogs');
      });
  }

  render() {
    return (
      <div className={'login'}>
        <BearIcon/>
        <button onClick={this.loginUser} className={'login-button'}>
          Let me in
        </button>
      </div>
    );
  }
}

export default withRouter(Login);