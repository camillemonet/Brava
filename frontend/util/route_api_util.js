export const fetchRoutes = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/routes`
  })
);

export const fetchRoute = (routeId) => (
  $.ajax({
    method: 'GET',
    url: `/api/routes/${routeId}`
  })
);

export const deleteRoute = (routeId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/routes/${routeId}`
  })
);

export const createRoute = ({route, locations}) => (
  $.ajax({
    method: 'POST',
    url: '/api/routes',
    data: { route, locations }
  })
);

export const updateRoute = ({route, locations}) => (
    $.ajax({
    method: 'PATCH',
    url: `/api/routes/${route.id}`,
    data: { route, locations }
  }) 
);