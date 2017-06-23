class ProgramsController < ApplicationController

  before_action :authenticate_user!, :except => [:landing]

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
    @access = current_user.access
    @teacher = Teacher.first
    @programs = Program.take(4)
    @programs_hashes = []

    @programs.each do |program|
      @program_hash = {
        title: program.title,
        num_program_tracks: program.tracks.count,
        premium: program.premium,
        id: program.id
      }
      @programs_hashes << @program_hash
    end
  end

  def genjordanlaskey
    @access = current_user.access
    @teacher = Teacher.find_by(first_name: 'Gen')
    @programs = Program.take(4)
    @programs_hashes = []

    @programs.each do |program|
      @program_hash = {
        title: program.title,
        num_program_tracks: program.tracks.count,
        premium: program.premium,
        id: program.id
      }
      @programs_hashes << @program_hash
    end
  end

  def collenmayer
    @access = current_user.access
    @teacher = Teacher.find_by(first_name: 'Collen')
    @programs = Program.take(4)
    @programs_hashes = []

    @programs.each do |program|
      @program_hash = {
        title: program.title,
        num_program_tracks: program.tracks.count,
        premium: program.premium,
        id: program.id
      }
      @programs_hashes << @program_hash
    end
  end

  def paulmitchell
    @access = current_user.access
    @teacher = Teacher.find_by(first_name: 'Paul')
    @programs = Program.take(4)
    @programs_hashes = []

    @programs.each do |program|
      @program_hash = {
        title: program.title,
        num_program_tracks: program.tracks.count,
        premium: program.premium,
        id: program.id
      }
      @programs_hashes << @program_hash
    end
  end

  def aimeeshelidemayer
    @access = current_user.access
    @teacher = Teacher.find_by(first_name: 'Aimee')
    @programs = Program.take(4)
    @programs_hashes = []

    @programs.each do |program|
      @program_hash = {
        title: program.title,
        num_program_tracks: program.tracks.count,
        premium: program.premium,
        id: program.id
      }
      @programs_hashes << @program_hash
    end
  end

  def caseystanton
    @access = current_user.access
    @teacher = Teacher.find_by(first_name: 'Casey')
    @programs = @teacher.programs
    @programs_hashes = []

    @programs.each do |program|
      @program_hash = {
        title: program.title,
        num_program_tracks: program.tracks.count,
        premium: program.premium,
        id: program.id
      }
      @programs_hashes << @program_hash
    end
  end

  def thewayofalltheearth
    @teacher = Teacher.first
    @program = Program.first
    @tracks = @program.tracks
  end

  def toblessthespacebetweenus
    @teacher = Teacher.find_by(first_name: 'Casey')
    @program = Program.find_by(title: 'To Bless The Space Between Us')
    @tracks = @program.tracks
  end

end
