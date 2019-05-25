import React, {Component} from 'react';
import {loginUser} from 'utils/loginUtils';

class Login extends Component {

  loginUser = () => {
    loginUser();
  }

  render() {
    return (
      <div>
        Login component
        <button onClick={this.loginUser}>Let me in</button>
      </div>
    );
  }
}

export default Login;
