json.routes do
  user.routes.each do |route|
    json.extract! route, :id, :user_id, :title, :total_distance
  end
end

json.locations do
  user.routes.each do |route|
    route.locations.each do |location|
      json.set! location.id do
        json.extract! location, :id, :latitude, :longitude, :order, :route_id
      end
    end
  end
end