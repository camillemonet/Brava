import { RECEIVE_WORKOUT_ERRORS, RECEIVE_WORKOUT } from '../actions/workout_actions';

const workoutErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKOUT_ERRORS:
      return action.errors;
    case RECEIVE_WORKOUT:
      return [];
    default:
      return state;
  }
}

export default workoutErrorsReducer;