import * as APIUtil from "../util/workout_api_util";

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const DESTROY_WORKOUT = "DESTROY_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

export const receiveWorkouts = workouts => ({
  type: RECEIVE_WORKOUTS,
  workouts
})

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout
})

export const destroyWorkout = workout => ({
  type: DESTROY_WORKOUT,
  workout
})

export const receiveWorkoutErrors = errors => ({
  type: RECEIVE_WORKOUT_ERRORS,
  errors
})

export const requestWorkouts = userId => dispatch => (
  APIUtil.fetchWorkouts(userId)
    .then(workouts => (dispatch(receiveWorkouts(workouts))),
      err => (dispatch(receiveWorkoutErrors(err))))
)

export const requestWorkout = workoutId => dispatch => (
  APIUtil.fetchWorkout(workoutId)
    .then(workout => (dispatch(receiveWorkout(workout))),
      err => (dispatch(receiveWorkoutErrors(err))))
)

export const deleteWorkout = workoutId => dispatch => (
  APIUtil.deleteWorkout(workoutId)
    .then(workout => (dispatch(destroyWorkout(workout))))
)

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout)
    .then(workout => (dispatch(receiveWorkout(workout))),
          err => (dispatch(receiveWorkoutErrors(err))))
)

export const updateWorkout = workout => dispatch => (
  APIUtil.updateWorkout(workout)
    .then(workout => (dispatch(receiveWorkout(workout))),
        err => (dispatch(receiveWorkoutErrors(err))))
)

