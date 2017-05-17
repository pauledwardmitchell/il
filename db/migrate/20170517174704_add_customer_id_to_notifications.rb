class AddCustomerIdToNotifications < ActiveRecord::Migration[5.0]
  def change
    add_column :notifications, :customer_id, :string
  end
end
