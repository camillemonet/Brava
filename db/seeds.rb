# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Workout.delete_all
Route.delete_all
Location.delete_all

demo = User.create(email: "demo@gmail.com", password: "123456", fname: "Viktor", lname: "Krum")

route1 = Route.create(
  title: "Regular Running Route",
  user_id: demo.id,
  total_distance: 6.44,
  show_route: true
)

route2 = Route.create(
  title: "State Park Route",
  user_id: demo.id,
  total_distance: 13.06,
  show_route: true
)

route3 = Route.create(
  title: "Campground Walk",
  user_id: demo.id,
  total_distance: 1.91,
  show_route: true
)
  
location1 = Location.new(
  latitude: 38.1476256,
  longitude: -122.7386344,
  route_id: route1.id,
  order: 0
).save

location2 = Location.new(
  latitude: 38.11401499999999,
  longitude: -122.6982597,
  route_id: route1.id,
  order: 1
).save

location3 = Location.new(
  latitude: 38.0041158,
  longitude: -122.6143642,
  route_id: route2.id,
  order: 2,
).save

location4 = Location.new(
  latitude: 38.0155422,
  longitude: -122.6711141,
  route_id: route2.id,
  order: 1
).save

location5 = Location.new(
  latitude: 38.0444516,
  longitude: -122.7478459,
  route_id: route2.id,
  order: 0
).save

location6 = Location.new(
  latitude: 38.0228413,
  longitude: -122.7355392,
  route_id: route3.id,
  order: 2
).save

location7 = Location.new(
  latitude: 38.0241961,
  longitude: -122.7358839,
  route_id: route3.id,
  order: 1
).save

location8 = Location.new(
  latitude: 38.0290632,
  longitude: -122.7421275,
  route_id: route3.id,
  order: 0
).save

workout1 = Workout.create(
  duration: 50,
  route_id: route1.id,
  user_id: demo.id,
  elevation: 1000,
  title: "Running with Friends",
  description: "Intensive run in the mountains",
  run_type: "",
  activity_type: "run",
  date: "2020-01-01",
  time: "10:00"
)

workout2 = Workout.create(
  duration: 30,
  route_id: '',
  user_id: demo.id,
  elevation: '',
  title: "Crossfit Class",
  description: "Crossfit class with Cedric",
  run_type: '',
  activity_type: 'crossfit',
  date: '2020-02-05',
  time: '8:00'
)

workout3 = Workout.create(
  duration: 20,
  route_id: '',
  user_id: demo.id,
  elevation: '',
  title: "Nightly Swim",
  description: "Quick swim in Lake MI",
  run_type: '',
  activity_type: 'swim',
  date: '2020-04-06',
  time: '8:00'
)

workout4 = Workout.create(
  duration: 45,
  route_id: route2.id,
  user_id: demo.id,
  elevation: '',
  title: "Bike Ride",
  description: "Solo bike ride at the state park",
  run_type: '',
  activity_type: 'ride',
  date: '2020-03-23',
  time: '11:00'
)

workout5 = Workout.create(
  duration: 30,
  route_id: route3.id,
  user_id: demo.id,
  elevation: '',
  title: "Short Campground Walk",
  description: "Short walk at our campsite",
  run_type: '',
  activity_type: 'walk',
  date: '2020-08-01',
  time: '8:00'
)
