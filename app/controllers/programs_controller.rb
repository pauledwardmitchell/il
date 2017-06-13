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
    @programs = Program.take(10)
  end

  def michaeljordanlaskey
    @teacher = Teacher.first
    @programs = Program.take(4)
  end

end
