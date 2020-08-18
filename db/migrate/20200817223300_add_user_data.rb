class AddUserData < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthdate, :date
    add_column :users, :gender, :string
  end
end
