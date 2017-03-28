class ProgramsController < ApplicationController

  def index
  	@programs = Program.all
  	@tracks = Track.all
  end

end