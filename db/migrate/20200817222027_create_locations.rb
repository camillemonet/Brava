class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false 
      t.integer :route_id, null: false 
      t.integer :order, null: false 
      t.timestamps
    end
    add_index :locations, :route_id
  end
end
