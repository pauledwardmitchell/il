const ProgramsColumn = React.createClass({

  getInitialState: function(){
    return {
      displayedTracks: []
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

  },

  render: function() {
  	return(
  	<div>
      <div className="programs-column-container">
  
        <h2>Programs</h2>
        
        <div>
        {this.props.programs.map(function(program) {
          return <ProgramCell 
                   key={program.id} 
                   program={program}
                   setTracks={this.setProgramTracks} />
          }.bind(this)
          )}
        </div>

      </div>
      
      <TracksColumn displayedTracks={this.state.displayedTracks}/>

    </div>


  	)
  }
})