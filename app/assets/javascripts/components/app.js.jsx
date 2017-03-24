
const App = React.createClass({

  render: function() {
  	return(
  	  <div>
        <ProgramsColumn programs={this.props.data} />
        <TracksColumn />
      </div>
  	)
  }
})