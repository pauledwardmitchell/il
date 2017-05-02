
const App = React.createClass({

  render: function() {
  	return(
  	  <div>
        <ProgramsColumn programs={this.props.programs} tracks={this.props.tracks} />
      </div>
  	)
  }
})
