class TracksController < ApplicationController

  before_action :authenticate_user!

  def show
  	@track = Track.find(params[:id])
  end

end
