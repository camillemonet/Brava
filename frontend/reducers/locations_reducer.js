import {
  RECEIVE_ROUTE,
  RECEIVE_ROUTES,
  DESTROY_ROUTE
} from '../actions/route_actions';

const routesReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = { ...state }

  switch (action.type) {
    case RECEIVE_ROUTE:
      return Object.assign({}, newState, action.locations);
    case RECEIVE_ROUTES:
      return Object.assign({}, newState, action.locations);
    case DESTROY_ROUTE: 
      for(let i = 0; i < Object.keys(action.locations).length; i++) {
        delete newState[Object.keys(action.locations)[i]]
      }
      return newState
    default:
      return state;
  }

};

export default routesReducer;