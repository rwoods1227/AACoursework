class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

    has_many :artworks,
    class_name: :Artwork,
    foreign_key: :artist_id,
    dependent: :destroy

    has_many :shares,
    class_name: :ArtworkShare,
    foreign_key: :viewer_id

    has_many :shared_artworks,
    through: :shares,
    source: :artwork,
    dependent: :destroy

    has_many :comments,
    class_name: :Comment,
    foreign_key: :author_id,
    dependent: :destroy
end