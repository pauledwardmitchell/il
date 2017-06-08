class ProgramsController < ApplicationController

  def index
  	@programs = Program.all
  	@tracks = Track.all
  end

  def test
  end

  def landing
  end

  def teachers
  end

end
