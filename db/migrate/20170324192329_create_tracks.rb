class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :duration
      t.string :link
      t.integer :program_id

      t.timestamps
    end
  end
end
