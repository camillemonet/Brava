class AddRouteCols < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :total_distance, :integer
    add_column :routes, :user_id, :integer
  end
end
