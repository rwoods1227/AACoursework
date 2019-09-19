class ApplicationController < ActionController::Base
  
  helper_method :current_user, :logged_in?, :require_logged_in
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in(user)
     current_user = user
     session[:session_token]= @current_user.reset_session_token!
  end

  def log_out
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in!
    redirect_to new_session_url unless logged_in?
  end

  def require_moderator(id)
    unless current_user.id == id
      flash[:errors] = 'You are not the moderator of this sub'
      redirect_to subs_url
    end
  end

  def require_author(id, sub_id)
    unless current_user.id == id
      flash[:errors] = 'You are not the author of this post'
      redirect_to sub_url(sub_id)
    end
  end
end
