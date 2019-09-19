class PostsController < ApplicationController
  before_action :require_logged_in!, only: [:new, :create]
  
  def show
    @post = Post.find(params[:id])
    render :show
  end

  def edit
    @post = Post.find(params[:id])
    require_author(@post.user_id, @post.sub_id)
    render :edit 
  end

  def update
    @post = Post.find(params[:id])
    require_author(@post.user_id, @post.sub_id)
    if @post.update_attributes(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def new
    @post = Post.new
    render :new
  end

  def destroy
    @post = Post.find(params[:id])
    sub_id = @post.sub_id
    @post.destroy
    redirect_to sub_url(sub_id)
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    debugger
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  private 
  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
