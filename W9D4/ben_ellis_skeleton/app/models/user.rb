# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'bcrypt'
require 'byebug'

class User < ApplicationRecord
  include BCrypt
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  attr_reader :password

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(user_name, password)
    user = User.find_by(username: user_name)
    return nil unless user && user.is_password?(password)
    user 
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def password=(new_pass)
    @password_digest = Password.create(new_pass)
    self.password_digest = @password_digest
  end

  def is_password?(pass)
    bcrypt_pass = Password.new(self.password_digest)
    bcrypt_pass.is_password?(pass)
  end

end
