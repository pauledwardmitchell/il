
const App = React.createClass({

  getInitialState: function(){
    return {
      displayedTracks: []
    }
  },

  setTrackCells: function(program_id) {
    // var clickedProgramTracks = []
    // var tracks = this.props.tracks

    // for (i = 0; i < tracks.length; i++) {
    //   if (tracks[i].program_id === program_id) {
    //   	clickedProgramTracks.push(this.props.tracks[i])
    //   }
    // }

    // this.setState({ displayedTracks: clickedProgramTracks })
  },

  render: function() {
  	return(
  	  <div>
        <ProgramsColumn programs={this.props.programs} tracks={this.props.tracks} />      
      </div>
  	)
  }
})