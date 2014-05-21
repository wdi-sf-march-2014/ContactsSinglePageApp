# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Contact.create!([{name: "Taylor", email: "Taylor.Swift@gmail.com", number: "6500000000", imgUrl: "http://www.taylorswift.com"},
              {name: "Shaq", email: "Shaq@gmail.com", number: "6500000000", imgUrl: "http://www.google.com/shaq"}])

