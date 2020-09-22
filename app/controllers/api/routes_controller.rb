class Api::RoutesController < ApplicationController

  before_action :require_logged_in!, only: [:create, :show, :destroy]

  def index 
    @routes = User.find_by(id: params[:user_id]).routes
    render "api/routes/index"
  end

  def create
    @route = Route.new(title: route_params[:title], user_id: current_user.id, total_distance: route_params[:total_distance], show_route: true)
    
    if @route.save
      params[:locations].each do |idx, location|
        Location.new(latitude: location[:location][:lat], longitude: location[:location][:lng], route_id: @route.id, order: idx).save
      end

      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
    
  end

  def destroy
    @route = Route.find_by(id: params[:id])
    if @route 
      @route.update(show_route: false)
      render "api/routes/show"
    end
  end

  def update

    @route = Route.find_by(id: params[:route][:routeId].to_i)
    @route.update(total_distance: route_params[:total_distance].to_f, title: route_params[:title])

    @route.locations.each do |location|
      location.delete
    end

    params[:locations].each do |idx, location|
      Location.new(latitude: location[:location][:lat].to_f, longitude: location[:location][:lng].to_f, route_id: @route.id, order: idx.to_i).save
    end

    render "api/routes/show"

  end

  def show 
    @route = Route.find_by(id: params[:id])
    render "api/routes/show"
  end

  private

  def route_params
    params.require(:route).permit(:total_distance, :title)
  end

end