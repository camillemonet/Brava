import { connect } from 'react-redux';
import { createWorkout, requestWorkouts } from '../../actions/workout_actions';
import { requestRoutes } from '../../actions/route_actions';
import WorkoutForm from './workout_form';

const mapStateToProps = ({ session, entities: { users, routes } }) => {
  return {
    currentUser: users[session.id],
    workout: {
      duration: '',
      activity_type: '',
      route_id: '',
      user_id: '',
      elevation: '',
      title: '',
      description: '',
      run_type: '',
      date: '',
      time: ''
    },
    routes: Object.values(routes),
    headerText: 'Create Activity'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (workout) => dispatch(createWorkout(workout)),
    requestWorkouts: (userId) => dispatch(requestWorkouts(userId)),
    requestRoutes: (userId) => dispatch(requestRoutes(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);