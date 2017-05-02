
const TrackCell = React.createClass({

  render: function() {
  	return(
        <div className="cell-right">
          <div className="icon">
          </div>

          <div className="text-container">
            <div className="title right">{this.props.track.title}</div>
            <div className="sub-title right">{this.props.track.duration} mins</div>
          </div>

          <div className="right-container">
            <div className="right-decorator">
            	<div className="">
                <a href={`/tracks/${this.props.track.id}`}>
            	    <img className="play-arrow" src="/assets/play-arrow-2x.png"></img>
                </a>
            	</div>
            </div>
          </div>
        </div>
  	)
  }
})
