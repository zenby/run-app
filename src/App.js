import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';

import Header from './components/Header';
import Info from './components/Info';
import Login from './components/Login';
import Menu from './components/Menu';
import Races from './components/Races';

class App extends Component {
  state = {
    isMenuOpened: false,
    isAuthorized: false
  }

  setRegisteredUser = () => {
    this.setState({isAuthorized: true});
  }

  renderLoginComponent = () => <Login setRegisteredUser={this.setRegisteredUser}/>;

  openMenu = () => this.setState({isMenuOpened: true});

  closeMenu = () => this.setState({isMenuOpened: false});

  render() {
    const {isMenuOpened, isAuthorized} = this.state;

    return (
      <Router>
        {isMenuOpened
          ? <Menu closeMenu={this.closeMenu}/>
          : <Fragment>
            <Header openMenu={this.openMenu}/>
            <PrivateRoute exact path="/jogs" component={Races} isAuthorized={isAuthorized}/>
            <PrivateRoute exact path="/info" component={Info} isAuthorized={isAuthorized}/>
            {!isAuthorized && <Route exact path="/login" render={this.renderLoginComponent}/>}
          </Fragment>}
      </Router>
    );
  }
}

function PrivateRoute({component: Component, ...rest}) {
  const renderComponent = (props) => {
    return rest.isAuthorized
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login'}}/>;
  };

  return <Route {...rest} render={renderComponent}/>;
}

export default App;
