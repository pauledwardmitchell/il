const ProgramsColumn = React.createClass({

  getInitialState: function(){
    return {
      clickedProgramId: null
    }
  },

  setProgramTracks: function(program_id) {
  	this.setState({ clickedProgramId: program_id })
  	this.props.getClickedProgram(this.state.clickedProgramId)
  },

  render: function() {
  	return(
      <div className="programs-column-container">
  
        <h2>Programs</h2>
        
        <div>
        {this.props.programs.map(function(program) {
          return <ProgramCell 
                   key={program.id} 
                   program={program}
                   setTracks={this.setProgramTracks} />
          }.bind(this))}
        </div>

      </div>


  	)
  }
})