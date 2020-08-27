import { 
  RECEIVE_ROUTES, 
  RECEIVE_ROUTE, 
  DESTROY_ROUTE 
} from '../actions/route_actions';

const routesReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = {...state}

  switch (action.type) {
    case RECEIVE_ROUTES:
      return Object.assign({}, newState, action.routes);
    case RECEIVE_ROUTE: 
      let newRoute = { [action.route.id]: action.route }
      return Object.assign({}, newState, newRoute);
    case DESTROY_ROUTE: 
      delete newState[action.route.id]
      return newState
    default:
      return state;
  }

};

export default routesReducer;