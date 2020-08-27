import { connect } from 'react-redux';
import { createRoute, requestRoutes, deleteRoute } from '../../actions/route_actions';
import RouteIndex from './route_index';

const mapStateToProps = ({ session, entities: { users, routes } }) => {
  return {
    currentUser: users[session.id],
    routes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestRoutes: (userId) => dispatch(requestRoutes(userId)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);