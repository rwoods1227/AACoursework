require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do 
    User.create!(username: "test_user", password: "test_pass")
  end
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_uniqueness_of(:session_token) }
  it { should validate_uniqueness_of(:username) }
  
  it "creates a new password_digest if given password" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session_token before validation" do 
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "is_password?" do 
    it "checks for correct password" do 
      expect(user.is_password?("test_pass")).to be true 
    end

    it "returns false if wrong password" do 
      expect(user.is_password?("ts")).to be false 
    end
  end

  describe "reset_session_token!" do 
    it "creates a new session token" do 
        session_token = user.session_token
        user.reset_session_token!
        expect(user.session_token).to_not eq(session_token)
    end
  end

  describe "find_by_credentials" do 
    it "returns user with matching credentials" do 
      user.save!
      expect(User.find_by_credentials("test_user", "test_pass")).to eq(user)
    end

    it "returns nil if invalid credentials" do 
       user.save!
      expect(User.find_by_credentials("tester", "test_ps")).to eq(nil)
    end
  end









end


