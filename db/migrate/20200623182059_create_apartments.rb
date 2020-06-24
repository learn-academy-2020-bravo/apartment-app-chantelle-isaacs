class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :street_num
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.string :mgr_name
      t.string :mgr_phone
      t.string :contact_hours

      t.timestamps
    end
  end
end
