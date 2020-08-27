class ChangeWorkoutTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :type
    add_column :workouts, :activity_type, :string
  end
end
