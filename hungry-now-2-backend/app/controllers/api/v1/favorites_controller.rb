class Api::V1::FavoritesController < ApplicationController

  def index
    @favorites = Favorite.all
    render json: @favorites
  end

  def create
    @favorite = Favorite.new(user_id: params[:user_id], label: params[:label], url: params[:url])
    if @favorite.save
      render json: @favorite
    else
      render json: { error: 'WRONG'}, status: 422
    end
  end

  def destroy
    Favorite.find(params[:id]).destroy
  end

end
