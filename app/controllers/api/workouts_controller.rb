class Api::WorkoutsController < ApplicationController

  before_action :require_logged_in!, only: [:create, :destroy, :index, :update]

  def index
    @workouts = User.find_by(id: params[:user_id]).workouts
    render "api/workouts/index"
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render "api/workouts/show"
    else
      render json: @workout.errors.full_messages, status: 422  
    end
  end

  def update
    # debugger
    @workout = Workout.find_by(id: params[:workout][:workoutId])
    if @workout && @workout.update(workout_params)
      render "api/workouts/show"
    else
      render json: ["Your update isn't working."], status: 422
    end
  end

  def destroy
    @workout = Workout.find_by(id: params[:id])
    if @workout && @workout.delete
      render "api/workouts/show"
    end
  end

  private

  def workout_params
    params.require(:workout).permit(:duration, :activity_type, :route_id, :user_id,
    :elevation, :title, :description, :run_type, :date, :time)
  end

end