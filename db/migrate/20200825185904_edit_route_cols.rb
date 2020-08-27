class EditRouteCols < ActiveRecord::Migration[5.2]
  def change
    change_column_null :routes, :user_id, :false
    change_column :routes, :total_distance, :decimal
  end
end
