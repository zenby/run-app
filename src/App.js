import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from 'components/Header';
import Info from 'components/Info';
import Login from 'components/Login';
import Menu from 'components/Menu';
import Races from 'components/Races';
import NotFoundPage from 'components/NotFoundPage';

class App extends Component {
  state = {
    isMenuOpened: false,
    isAuthorized: false,
    isRaceFilterShown: false
  }

  setRegisteredUser = () => {
    this.setState({isAuthorized: true});
  }

  renderLoginComponent = () => <Login setRegisteredUser={this.setRegisteredUser}/>;

  openMenu = () => this.setState({isMenuOpened: true});

  closeMenu = () => this.setState({isMenuOpened: false});

  toggleRaceFilter = () => this.setState({isRaceFilterShown: !this.state.isRaceFilterShown})

  render() {
    const {isMenuOpened, isAuthorized, isRaceFilterShown} = this.state;

    return (
      <Router>
        {isMenuOpened
          ? <Menu closeMenu={this.closeMenu}/>
          : <Fragment>
            <Header
              openMenu={this.openMenu}
              toggleRaceFilter={this.toggleRaceFilter}
              isRaceFilterShown={isRaceFilterShown}
            />
            <Switch>
              <PrivateRoute
                exact path="/jogs" component={Races} isAuthorized={isAuthorized} componentProps={{isRaceFilterShown}}
              />
              <PrivateRoute exact path="/info" component={Info} isAuthorized={isAuthorized}/>
              {!isAuthorized && <Route exact path="/login" render={this.renderLoginComponent}/>}
              <Route component={NotFoundPage}/>
            </Switch>
          </Fragment>}
      </Router>
    );
  }
}

function PrivateRoute({component: Component, ...rest}) {
  const renderComponent = (props) => {
    return rest.isAuthorized
      ? <Component {...props} {...rest.componentProps}/>
      : <Redirect to={{pathname: '/login'}}/>;
  };

  return <Route {...rest} render={renderComponent}/>;
}

export default App;
