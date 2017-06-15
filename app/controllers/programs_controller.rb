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

  def genjordanlaskey
    @teacher = Teacher.find_by(first_name: 'Gen')
    @programs = Program.take(4)
  end

  def collenmayer
    @teacher = Teacher.find_by(first_name: 'Collen')
    @programs = Program.take(4)
  end

  def paulmitchell
    @teacher = Teacher.find_by(first_name: 'Paul')
    @programs = Program.take(4)
  end

  def aimeeshelidemayer
    @teacher = Teacher.find_by(first_name: 'Aimee')
    @programs = Program.take(4)
  end

  def caseystanton
    @teacher = Teacher.find_by(first_name: 'Casey')
    @programs = Program.take(4)
  end

  def thewayofalltheearth
    @teacher = Teacher.first
    @program = Program.first
    @tracks = @program.tracks
  end

end
