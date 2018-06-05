class AlbumsController < ApplicationController
  before_action :set_album, only: [:show]
	def index
		@albums = Album.all.order(id: :desc)
    authorize @albums
	end

  def show
  end

  private

  def set_album
    @album = Album.find(params[:id])
    authorize @album
  end
end