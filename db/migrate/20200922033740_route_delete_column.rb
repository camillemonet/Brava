class RouteDeleteColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :show_route, :boolean
  end
end
