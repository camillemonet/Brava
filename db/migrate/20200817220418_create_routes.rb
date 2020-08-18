class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :total_distance, null: false 
      t.integer :user_id, null: false 
      t.timestamps
    end
  end
end
