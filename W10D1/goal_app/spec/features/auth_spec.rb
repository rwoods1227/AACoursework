require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content "New User"
  end
  feature 'signing up a user' do
    scenario 'shows username on the homepage after signup' do
      sign_up_user
      expect(page).to have_content "someuser"
    end

  end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login' do 
    log_in_user
    expect(page).to have_content "someuser"
  end
end

feature 'logging out' do
  scenario 'begins with a logged out state' do 
      visit new_session_url
      expect(page).to have_content "Log in"
  end

  scenario 'doesn\'t show username on the homepage after logout' do 
    log_in_user
    click_on "Log out"
    expect(page).not_to have_content "someuser"
  end

end