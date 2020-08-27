import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import routes from './route_errors_reducer';
import workouts from './workout_errors_reducer';

export default combineReducers({
  session,
  routes,
  workouts
});