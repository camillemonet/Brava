import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const DESTROY_ROUTE = 'DESTROY_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

export const receiveRoutes = ({ routes, locations }) => ({
  type: RECEIVE_ROUTES,
  routes,
  locations
})

export const receiveRoute = ({ route, locations }) => ({
  type: RECEIVE_ROUTE,
  route,
  locations
})

export const destroyRoute = ({ route, locations }) => ({
  type: DESTROY_ROUTE,
  route,
  locations
})

export const receiveRouteErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
})

export const requestRoutes = (userId) => dispatch => (
  APIUtil.fetchRoutes(userId)
    .then(payload => (dispatch(receiveRoutes(payload))), 
          err => (dispatch(receiveRouteErrors(err))))
)

export const requestRoute = routeId => dispatch => (
  APIUtil.fetchRoute(routeId)
    .then(route => (dispatch(receiveRoute(route))),
          err => (dispatch(receiveRouteErrors(err))))
)

export const deleteRoute = routeId => dispatch => (
  APIUtil.deleteRoute(routeId)
    .then(payload => (dispatch(destroyRoute(payload))))
)

export const createRoute = payload => dispatch => (
  APIUtil.createRoute(payload)
    .then((payload) => (dispatch(receiveRoute(payload))),
          err => (dispatch(receiveRouteErrors(err))))
);

export const updateRoute = payload => dispatch => (
  APIUtil.updateRoute(payload)
    .then((payload) => (dispatch(receiveRoute(payload))),
          err => (dispatch(receiveRouteErrors(err))))
);
