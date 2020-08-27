class AddRouteNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :user_id, :integer, null: false
  end
end
