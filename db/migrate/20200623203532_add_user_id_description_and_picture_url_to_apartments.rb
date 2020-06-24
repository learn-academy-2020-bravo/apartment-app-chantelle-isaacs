class AddUserIdDescriptionAndPictureUrlToApartments < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :user_id, :integer
    add_column :apartments, :description, :text
    add_column :apartments, :picture_url, :string
  end
end
