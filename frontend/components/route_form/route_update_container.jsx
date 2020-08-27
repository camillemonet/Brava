import { connect } from 'react-redux';
import { updateRoute, requestRoutes } from '../../actions/route_actions';
import RouteUpdate from './route_update';

const mapStateToProps = (state, { match }) => {

  let routeId = parseInt(match.params.id);
  let currentRoute = state.entities.routes[routeId];
  let currentLocations = [];

  if (currentRoute) {
    for (let i = 0; i < currentRoute.location_ids.length; i++) {
      currentLocations.push(state.entities.locations[currentRoute.location_ids[i]])
    }
  
    currentLocations = currentLocations.sort(function(a, b) {return (a.order - b.order)})

    for (let i = 0; i < currentLocations.length; i++) {
      currentLocations[i] = { location: { lat: parseFloat(currentLocations[i].latitude), lng: parseFloat(currentLocations[i].longitude) } }
    }
  }
  
  return {
    currentRoute,
    routeId,
    currentUser: state.entities.users[state.session.id],
    currentLocations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: (route) => dispatch(updateRoute(route)),
    requestRoutes: (userId) => dispatch(requestRoutes(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteUpdate);