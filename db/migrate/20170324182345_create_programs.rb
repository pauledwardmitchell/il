class CreatePrograms < ActiveRecord::Migration[5.0]
  def change
    create_table :programs do |t|
      t.string :title
      t.string :subtitle
      t.text :explanation

      t.timestamps
    end
  end
end
