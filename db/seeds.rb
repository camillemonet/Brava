# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create(email: "user1", password: "123456")
demo = User.create(email: "demo@gmail.com", password: "123456")

Route.delete_all

route1 = Route.create(
  title: "The first route!",
  user_id: 10,
  total_distance: 7,
  locations: [{lat: 36.0529189, lng: -112.0837194}, 
              {lat: 36.0529294, lng: -112.0836931}, 
              {lat: 36.0529322, lng: -112.0836866}, 
              {lat: 36.0529471, lng: -112.0836622}]
)