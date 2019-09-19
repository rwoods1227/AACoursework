# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :user_id

  has_many :post_subs,
  class_name: :PostSub,
  foreign_key: :post_id,
  inverse_of: :sub

  has_many :subs,
  through: :post_subs,
  source: :sub
end
