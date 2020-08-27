import { connect } from 'react-redux';
import { updateWorkout, requestWorkouts } from '../../actions/workout_actions';
import { requestRoutes } from '../../actions/route_actions';
import WorkoutForm from './workout_form';

const mapStateToProps = ({ session, entities: { users, routes, workouts } }, { match }) => {

  let workoutId = parseInt(match.params.id);
  let workout = workouts[workoutId];
  let workoutObj = {};

  if (workout) {
    workoutObj = {
      duration: parseInt(workout.duration),
      activity_type: workout.activity_type,
      route_id: workout.route_id,
      user_id: workout.user_id,
      elevation: parseInt(workout.elevation),
      title: workout.title,
      description: workout.description,
      run_type: workout.run_type,
      date: workout.date,
      time: workout.time.slice(11, 16),
      workoutId
    }
  }

  return {
    currentUser: users[session.id],
    workout: workoutObj,
    routes: Object.values(routes),
    headerText: "Update Activity"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (workout) => dispatch(updateWorkout(workout)),
    requestWorkouts: (userId) => dispatch(requestWorkouts(userId)),
    requestRoutes: (userId) => dispatch(requestRoutes(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);