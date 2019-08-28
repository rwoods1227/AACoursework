class CommentsController < ApplicationController

  def index
    # user 
    # artwork
    #render json: {user_comments: user.comments, artwork_comments: artwork.comments}
    if user = User.find(params[:author][:author_id])
        render json: user.comments
    elsif artwork = Artwork.find(params[:artwork][:artwork_id])
        render json: artwork.comments
    else
        render json: comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
     comment = Comment.new(comment_params)
      if comment.save
          render json: comment
      else
          render json: comment.errors.full_messages, status: :unprocessable_entity
      end
  end
  
  def destroy
     comment = Comment.find(params[:id])
     comment.destroy
    render json: comment
  end

  private

  def comment_params
      params.require(:comment).permit(:artwork_id, :author_id)
  end
end