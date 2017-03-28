
const TracksColumn = React.createClass({

  render: function() {
  	return(
    <div className="cell-container-right">

      <h2>Selected Program Title</h2>

    {this.props.displayedTracks.map(function(track) {
          return <TrackCell 
                   key={track.id} 
                   track={track} />
          }
        )}
    </div>

  	)
  }
	
})