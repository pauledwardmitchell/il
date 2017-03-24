const ProgramsColumn = React.createClass({


  render: function() {
  	return(
      <div className="programs-column-container">
  
        <h2>Programs</h2>
        
        <div>
        {this.props.data.map(function(program) {
          return <ProgramCell key={program.id} program={program} />
          }
        )}
        </div>

      </div>


  	)
  }
})