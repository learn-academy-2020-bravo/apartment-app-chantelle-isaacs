# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
apartments = [{street_num: "123 Rosewood Ave", city: "Los Angeles", state: "CA", zip: "90101", country: "USA", mgr_name: "Lucy Davidson", mgr_phone: "818-345-6789", contact_hours: "9am-5pm PST", description: "Two bed, two bath, 1100sqft, laundry in unit. No pets.", picture_url: "https://media.graytvinc.com/images/wcjb_apartment-living-room.jpg"}, 
{street_num: "456 Alameda Ave", city: "San Diego", state: "CA", zip: "92103", country: "USA", mgr_name: "Joe Smith", mgr_phone: "732-345-6789", contact_hours: "9am-5pm PST", description: "Two bed, two bath, 1200 sqft, laundry in unit. Cats allowed.", picture_url: "https://images.rentals.ca/property-pictures/medium/red-deer-ab/279104/mid-rise-apartment-kitchen-natural-light-carpet-kitchen-island-1471984.jpg"}]

apartments.each do |attributes|
    Apartment.create attributes
end
