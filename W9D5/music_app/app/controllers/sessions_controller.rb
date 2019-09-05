
require 'byebug'
class SessionsController < ApplicationController

    def new
      render :new 
    end

    def create
      user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
      
      if user
        login_user!(user)
        redirect_to user_url(user) 
      else
        flash.now[:errors] = ["Incorrect username and/or password"]
        render :new 
      end
    end

    def destroy
      logout_user!
      redirect_to users_url
    end


    
end