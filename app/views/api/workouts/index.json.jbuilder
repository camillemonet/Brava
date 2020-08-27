if @workouts
  @workouts.each do |workout|
    json.set! workout.id do
      json.extract! workout, :id, :duration, :activity_type, :route_id, :user_id,
      :elevation, :title, :description, :run_type, :date, :time
    end
  end
else
  json.workouts {}
end