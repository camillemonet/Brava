class AddRouteCol < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :title, :string
  end
end
