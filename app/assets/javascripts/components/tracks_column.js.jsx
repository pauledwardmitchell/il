
const TracksColumn = React.createClass({

  render: function() {
  	return(
      <div className="cell-container-right">

        <h2>Selected Program Title</h2>

        <div className="cell-right">
          <div className="icon">
          </div>
      
          <div className="text-container">
            <div className="title">Title</div>
            <div className="sub-title">sub-title</div>
          </div>
      
          <div className="right-container">
            <div className="right-decorator">
            	<div className="">
                <a href="">
            	    <img className="play-arrow" src="/assets/play-arrow-2x.png"></img>
                </a>
            	</div>
            </div>
          </div>
        </div>
      </div>
  	)
  }
	
})