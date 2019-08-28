class AddColumnUsernameToUser < ActiveRecord::Migration[5.2]
  def change
    remove_column(:users, :name, :string)
    remove_column(:users, :email, :string)

    add_column(:users, :username, :string)
    change_column_null :users, :username, :string, false
    add_index(:users, :username, unique: true)
  end
end
