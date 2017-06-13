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
    @teachers = Teacher.all.order(:last_name)
  end

  def teacher
    @teacher = Teacher.first
    @programs = Program.take(3)
    # @programs << Program.first
    # @programs << Program.last
    # @programs << Program.find(2)
    # @programs << Program.find(3)
  end

end
