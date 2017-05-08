const ProgramsColumn = React.createClass({

  getInitialState: function(){
    return {
      displayedTracks: [],
      activeCellId: null
    }
  },

  setProgramTracks: function(program_id) {
    var clickedProgramTracks = []
    var tracks = this.props.tracks

    for (i = 0; i < tracks.length; i++) {
      if (tracks[i].program_id === program_id) {
      	clickedProgramTracks.push(this.props.tracks[i])
      }
    }

    this.setState({ displayedTracks: clickedProgramTracks })

    this.setActiveCell(program_id)

  },

  setActiveCell: function(program_id) {
    this.setState({ activeCellId: program_id })
  },

  // cellClass: function() {
  //   var programs = this.props.programs

  //   for (i = 0; i < programs.length; i++) {
  //     if (programs[i].program_id === this.state.activeCellId) {
  //       return 'active'
  //     } else {
  //       return null
  //     }
  //   }
  // },

  ifActive: function(program_id) {
    if (this.state.activeCellId === program_id ) {
      return true
    } else {
      return false
    }
  },

  render: function() {
  	return(
  	<div className="programs-container">

      <div className="programs-column-container">

        <h2>Programs</h2>

        <div>
        {this.props.programs.map((program) => {
          return <ProgramCell
                   key={program.id}
                   program={program}
                   ifActive={this.ifActive(program.id)}
                   // onClick={this.handleCellClick(program.id)}
                   // cellClass={this.cellClass}
                   setTracks={this.setProgramTracks} />
          }
          )}
        </div>

      </div>

      <TracksColumn displayedTracks={this.state.displayedTracks}/>

    </div>


  	)
  }
})
