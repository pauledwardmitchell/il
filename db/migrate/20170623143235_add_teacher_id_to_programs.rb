class AddTeacherIdToPrograms < ActiveRecord::Migration[5.0]
  def change
    add_column :programs, :teacher_id, :integer
  end
end
