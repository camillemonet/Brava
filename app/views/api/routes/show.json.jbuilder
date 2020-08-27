tempArr = []
@route.locations.each do |location|
  tempArr.push(location.id)
end

json.route do
  json.extract! @route, :id, :user_id, :title, :total_distance
  json.location_ids do
    json.array! tempArr
  end
end

json.locations do
  @route.locations.each do |location|
    json.set! location.id do
      json.extract! location, :id, :latitude, :longitude, :order, :route_id
    end
  end
end

