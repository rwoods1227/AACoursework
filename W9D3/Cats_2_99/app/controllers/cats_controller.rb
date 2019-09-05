class CatsController < ApplicationController

  def index
    @cats = Cat.all 
    render :index 
  end

  def show 
    @cat = Cat.find_by_id(params[:id]) #maybe find?
    if @cat
      render :show
    else
    end
  end

  def new
    @caat = Cat.new
    render :new
  end

  def create
    @caat = Cat.new(cat_params)

    if @caat.save
      redirect_to cat_url(@caat)
    else
      render :new
    end
  end

  private

  def cat_params
    params.require(:cats).permit(:name, :birth_date, :color, :sex, :description)
  end
end
