import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import Splash from './splash/splash_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer}/>
      <Route exact path="/signup" component={SignUpFormContainer}/>
      <Route exact path="/" component={Splash}/>
    </Switch>
  </div>
);

export default App;