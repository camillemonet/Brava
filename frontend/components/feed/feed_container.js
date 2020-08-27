import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { requestWorkouts, deleteWorkout } from '../../actions/workout_actions';
import { requestRoutes } from '../../actions/route_actions';
import Feed from './feed';

const mapStateToProps = ({ session, entities: { users, workouts } }) => {
  return {
    currentUser: users[session.id],
    workouts: Object.values(workouts)
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