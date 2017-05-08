
const TracksColumn = React.createClass({

  emptyColumn: function() {
    return(
      <div>
      </div>
    )
  },

  allTracks: function() {
    return(
      <div className="cell-container-right">

        <h2>Selected Program Title</h2>

        {this.props.displayedTracks.map(function(track) {
          return <TrackCell
                   key={track.id}
                   track={track} />
          }
        )}
        <div className='cell'> //empty cell hidden by footer
        </div>
      </div>

  	)
  },

  renderColumn: function() {
    if (this.props.displayedTracks.length === 0) {
      return this.emptyColumn()
    } else {
      return this.allTracks()
    }
  },

  render: function() {
  	return this.renderColumn()
  }

})
