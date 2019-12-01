import React, {Component} from 'react';
import {loginUser} from 'utils/loginUtils';
import {withRouter} from 'react-router-dom';
import Media from 'react-media';

import PinkBearIcon from './components/PinkBearIcon';
import WhiteBearIcon from './components/WhiteBearIcon';

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
      <div className={'login-container'}>
        <div className={'login-box'}>
          <Media query="(min-width: 600px)">
            {matches => matches ? <WhiteBearIcon/> : <PinkBearIcon/>}
          </Media>
          <button onClick={this.loginUser} className={'action-button'}>
            Let me in
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);