import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { requestWorkouts, deleteWorkout } from '../../actions/workout_actions';
import { requestRoutes } from '../../actions/route_actions';
import Feed from './feed';

const mapStateToProps = ({ session, entities: { users, workouts, routes } }) => {

  let currentUser = users[session.id];

  let workouts_arr = Object.values(workouts);
  let routes_arr = Object.values(routes);

  let workout_ct = 0;
  let route_ct = 0;
  let totalDistance = 0;
  let runTime = 0;
  let bikeTime = 0;
  let swimTime = 0;
  let otherTime = 0;
  let maxTime = 0.01;
  let totTime = {hours: 0, minutes: 0};

  if (Object.keys(workouts).length && Object.keys(routes).length) {

    for (let i = 0; i < workouts_arr.length; i++) {
      if (workouts_arr[i].user_id === session.id) {

        workout_ct += 1;
        let temp_route_id = workouts_arr[i].route_id;

        if (temp_route_id) {
          totalDistance += parseFloat(routes[temp_route_id].total_distance);
        }

        if (workouts_arr[i].activity_type === "run") {
          runTime += workouts_arr[i].duration
        } else if (workouts_arr[i].activity_type === "ride") {
          bikeTime += workouts_arr[i].duration
        } else if (workouts_arr[i].activity_type === "swim") {
          swimTime += workouts_arr[i].duration
        } else {
          otherTime += workouts_arr[i].duration
        }
      }

    }

    maxTime = Math.max(runTime, bikeTime, swimTime, otherTime);
    let totMins = runTime + bikeTime + swimTime + otherTime;
    let totHours = Math.floor(totMins / 60);
    totTime = { hours: (totHours), minutes: (totMins - (totHours * 60)) }

    for (let i = 0; i < routes_arr.length; i++) {
      if (routes_arr[i].user_id === session.id) {
        route_ct += 1
      }
    }
  }

  return {
    currentUser,
    workouts: workouts_arr,
    workout_ct,
    route_ct,
    totalDistance,
    runTime,
    bikeTime,
    swimTime,
    otherTime,
    maxTime,
    totTime,
    routes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestWorkouts: (userId) => (dispatch(requestWorkouts(userId))),
    requestRoutes: (userId) => (dispatch(requestRoutes(userId))),
    deleteWorkout: (workoutId) => (dispatch(deleteWorkout(workoutId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);