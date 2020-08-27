import { connect } from 'react-redux';
import { createRoute, requestRoutes } from '../../actions/route_actions';
import RouteForm from './route_form';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    currentLocations: []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRoute: (route) => dispatch(createRoute(route)),
    requestRoutes: (userId) => dispatch(requestRoutes(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);