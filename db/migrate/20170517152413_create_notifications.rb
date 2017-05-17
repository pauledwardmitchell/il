class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.string :name
      t.boolean :closed, default: false

      t.timestamps
    end
  end
end
