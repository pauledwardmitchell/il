class AddAccessForeverToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :access_forever, :boolean, default: false
  end
end
