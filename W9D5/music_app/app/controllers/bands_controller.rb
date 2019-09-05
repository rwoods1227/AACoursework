class BandsController < ApplicationController


    def index
        @bands = Band.all 
        render :index
    end

    def create
         @band = Band.new(band_params)
        if @band.save
            flash[:notice] = "Successfully created Band"
            redirect_to band_url(@band)
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new 
        end
    end

    def new
        @band = Band.new
        render :new 
    end

    def edit
      @band= current_user.bands.find(params[:id]) #probably wrong
      render :edit
    end

    def show
        @band = Band.find(params[:id]) 
        render :show
    end

    def update
      @band = Band.find(params[:id]) #probably wrong
      if @band.update_attributes(band_params) #active record method
        redirect_to band_url(@band)
      else
        flash.now[:errors] = @band.errors.full_messages
        render :edit
      end
    end

    def destroy
      @band = Band.find(params[:id])
      @band.destroy
      flash[:success] = "Band deleted"
      redirect_to bands_url
    end

    private 

    def band_params
        params.require(:band).permit(:name)
    end
end