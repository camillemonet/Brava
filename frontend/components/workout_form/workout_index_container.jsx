import { connect } from 'react-redux';
// import { } from '../../actions/workout_actions';
import WorkoutIndex from './workout_index';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // createWorkout: (workout) => dispatch(createWorkout(workout)),
    // requestWorkouts: (userId) => dispatch(requestWorkouts(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);