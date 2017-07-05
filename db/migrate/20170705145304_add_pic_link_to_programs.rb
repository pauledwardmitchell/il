class AddPicLinkToPrograms < ActiveRecord::Migration[5.0]
  def change
    add_column :programs, :pic_link, :string, default: 'https://s3-us-west-2.amazonaws.com/innerlfie/Photos/cez2.jpeg'
  end
end
