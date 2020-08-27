export const fetchWorkouts = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/workouts`
  })
);

export const fetchWorkout = (workoutId) => (
  $.ajax({
    method: 'GET',
    url: `/api/workouts/${workoutId}`
  })
);

export const deleteWorkout = (workoutId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/workouts/${workoutId}`
  })
);

export const createWorkout = (workout) => (
  $.ajax({
    method: 'POST',
    url: '/api/workouts',
    data: { workout }
  })
);

export const updateWorkout = (workout) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/workouts/${workout.id}`,
    data: { workout }
  })
);