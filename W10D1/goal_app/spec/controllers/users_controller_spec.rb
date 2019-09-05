require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "renders the new template" do
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do
        post :create, params: {
          user: {username: 'test_user', password: ''}
        }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "validates that the password is at least 6 characters long" do
        post :create, params: {
          user: {username: 'test_user', password: 'test'}
        }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects user to users index page on success" do 
        post :create, params: {
          user: {username: 'test_user', password: 'test_pass'}
        }
        expect(response).to redirect_to(users_url)
      end
    end
  end

  describe "GET #show" do 
    it "renders the show page" do 
      user = User.create(username: 'test_user', password: 'test_pass')
      get :show, params: {id: user.id}
      expect(response).to render_template("show")
    end
  end

  describe "GET #index" do 
    it "renders the index page" do 
      get :index
      expect(response).to render_template("index")
    end
  end
  
end

