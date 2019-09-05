# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
    attr_reader :password
     validates :email, :password_digest, :session_token, presence: true 
     validates :email, :session_token, uniqueness: true 
     validates :password, length: { minimum: 6, allow_nil: true }

     after_initialize :ensure_session_token

    def self.generate_session_token
       SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        #come back and fix here 
        return nil unless user && user.is_password?(password)
        user 
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
        #session[:session_token] = nil this is in logout
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pass = BCrypt::Password.new(self.password_digest)
        pass.is_password?(password)
    end

    private 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
