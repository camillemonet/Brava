import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';
import Splash from './splash/splash_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import FeedContainer from './feed/feed_container';
import RouteContainer from './route_form/route_form_container';
import RouteUpdateContainer from './route_form/route_update_container';
import RouteIndexContainer from './route_form/route_index_container';
import WorkoutContainer from './workout_form/workout_form_container';
import WorkoutUpdateContainer from './workout_form/workout_update_container';
import WorkoutIndexContainer from './workout_form/workout_index_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div className="main">
    <header>
      <HeaderContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer}/>
      <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
      <ProtectedRoute exact path="/feed" component={FeedContainer}/>
      <ProtectedRoute exact path="/routes/new" component={RouteContainer}/>
      <ProtectedRoute exact path="/:user_id/routes" component={RouteIndexContainer}/>
      <ProtectedRoute exact path="/routes/update/:id" component={RouteUpdateContainer}/>
      <ProtectedRoute exact path="/activities/new" component={WorkoutContainer}/>
      <ProtectedRoute exact path="/:userId/activities" component={WorkoutIndexContainer}/>
      <ProtectedRoute exact path="/activities/update/:id" component={WorkoutUpdateContainer}/>
      <AuthRoute exact path="/" component={Splash}/>
    </Switch>
    <FooterContainer />
  </div>
);

export default App;