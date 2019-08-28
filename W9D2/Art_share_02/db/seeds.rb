# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all

u1 = User.create!(username: "Johndoe")
u2 = User.create!(username: "Jackdoe")
u3 = User.create!(username: "Jilldoe")
u4 = User.create!(username: "Joedoe")


a1 = Artwork.create!(title: :MonaLisa, image_url: "imgur.com/ML", artist_id: u1.id)
a2 = Artwork.create!(title: :LastSupper, image_url: "imgur.com/LS", artist_id: u2.id)
a3 = Artwork.create!(title: :StarryNight, image_url: "imgur.com/SN", artist_id: u3.id)
a4 = Artwork.create!(title: :TheScream, image_url: "imgur.com/TS", artist_id: u4.id)


ArtworkShare.create!(artwork_id: a1.id, viewer_id: u4.id)
ArtworkShare.create!(artwork_id: a2.id, viewer_id: u3.id)
ArtworkShare.create!(artwork_id: a3.id, viewer_id: u2.id)
ArtworkShare.create!(artwork_id: a4.id, viewer_id: u1.id)

c1 = Comment.create!(artwork_id: a1.id, author_id: u4.id, body: "It sucks")
c2 = Comment.create!(artwork_id: a2.id, author_id: u3.id, body:"Beautiful")
c3 = Comment.create!(artwork_id: a3.id, author_id: u2.id, body:"I don't understand")
c4 = Comment.create!(artwork_id: a4.id, author_id: u1.id, body:"Marvelous")