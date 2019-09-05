# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all

c1 = Cat.create!(name: "Star Wars", birth_date: Date.new(2005), color: "rainbow", sex: "M", description: "Fluffy and colorful")
c2 = Cat.create!(name: "Chewey", birth_date: Date.new(2010), color: "brown", sex: "M", description: "Fluffy and loud")