json.routes do
  @routes.each do |route|
    tempArr = []
    route.locations.each do |location|
      tempArr.push(location.id)
    end
    json.set! route.id do
      json.extract! route, :id, :user_id, :title, :total_distance, :show_route
      json.location_ids do 
        json.array! tempArr
      end
    end
  end
end

json.locations do
  @routes.each do |route|
    route.locations.each do |location|
      json.set! location.id do
        json.extract! location, :id, :latitude, :longitude, :order, :route_id
      end
    end
  end
end