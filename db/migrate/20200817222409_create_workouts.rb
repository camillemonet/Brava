class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :duration, null: false 
      t.string :type, null: false
      t.integer :route_id
      t.integer :user_id
      t.integer :elevation
      t.string :title, null: false 
      t.text :description
      t.string :run_type
      t.date :date, null: false 
      t.time :time, null: false 
      t.timestamps
    end
    add_index :workouts, :user_id
    add_index :workouts, :route_id
  end
end
