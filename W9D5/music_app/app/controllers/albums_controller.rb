class AlbumsController < ApplicationController

    def index
        @albums = Album.all 
        render :index
    end

    def create
         @album = album.new(album_params)
        if @album.save
            flash[:notice] = "Successfully created Album"
            redirect_to album_url(@album)
        else
            flash.now[:errors] = @album.errors.full_messages
            render :new 
        end
    end

    def new
        @album = Album.new
        render :new 
    end

    def edit
      @album= current_user.albums.find(params[:id]) #probably wrong
      render :edit
    end

    def show
        @album = album.find(params[:id]) 
        render :show
    end

    def update
      @album = album.find(params[:id]) #probably wrong
      if @album.update_attributes(album_params) #active record method
        redirect_to album_url(@album)
      else
        flash.now[:errors] = @album.errors.full_messages
        render :edit
      end
    end

    def destroy
      @album = album.find(params[:id])
      @album.destroy
      flash[:success] = "album deleted"
      redirect_to albums_url
    end

    private 

    def album_params
        params.require(:album).permit(:name)
    end
end