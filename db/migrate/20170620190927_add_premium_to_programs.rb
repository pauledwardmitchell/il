class AddPremiumToPrograms < ActiveRecord::Migration[5.0]
  def change
    add_column :programs, :premium, :boolean, default: false
  end
end
