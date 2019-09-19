class SubsController < ApplicationController
  before_action :require_logged_in!, only: [:new, :create]
  #before_action require_moderator(params[:sub][:user_id]), only: [:edit, :update] #maybe come back and refactor 


  def new
    @sub = Sub.new
    render :new
  end

  def index
    @subs = Sub.all 
    render :index
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.user_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors]= @sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find(params[:id])
    render :show
  end

  def update
    @sub = Sub.find(params[:id])
    require_moderator(@sub.id)
    if @sub.update_attributes(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    require_moderator(@sub.id)
    render :edit 
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end
end
