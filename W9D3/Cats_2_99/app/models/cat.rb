class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
    validates :sex, inclusion: { in: ["M", "F"]} 
    validates :color, inclusion: { in: ["brown", "white", "black", "blue", "rainbow"]}
    validates :name, :description, :sex, :color, :birth_date, presence: true 

  def age
    Date.today.year - self.birth_date.year
  end
end