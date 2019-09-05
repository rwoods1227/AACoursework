class SessionsController < ApplicationController

  def new 
    @user = User.new
    render :new 
  end

  def create
    user = User.find_by_credentials(params[:username], params[:password_digest])
    if user
      session[:session_token] = user.reset_session_token
      flash[:success] = "Logged in Successfully!"
      redirect_to cats_url
    else
      flash[:error] = "Wrong username/password combo"
      render :new, status: 401
    end
  end

  def destroy
    return nil unless current_user
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to cats_url
  end

end
