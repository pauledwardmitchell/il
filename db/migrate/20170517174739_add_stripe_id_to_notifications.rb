class AddStripeIdToNotifications < ActiveRecord::Migration[5.0]
  def change
    add_column :notifications, :stripe_id, :string
  end
end
