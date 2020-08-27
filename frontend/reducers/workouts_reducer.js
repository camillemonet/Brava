import {
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT,
  DESTROY_WORKOUT
} from '../actions/workout_actions';

const workoutsReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = { ...state }

  switch (action.type) {
    case RECEIVE_WORKOUTS:
      return Object.assign({}, newState, action.workouts);
    case RECEIVE_WORKOUT:
      let newWorkout = action.workout
      return Object.assign({}, newState, newWorkout);
    case DESTROY_WORKOUT:
      delete newState[Object.keys(action.workout)[0]]
      return newState
    default:
      return state;
  }

};

export default workoutsReducer;