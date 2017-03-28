
const ProgramCell = React.createClass({

  onClick: function() {
    this.handleClick(this.props.program.id)
  },

  handleClick: function(id) {
    this.props.setTracks(id)
  },

  render: function() {

  	return(
  	<div className="cell" onClick={this.onClick}>
      <div className="icon">
        <img className="icon-img" src="http://cdn.calm.com/images/qK3IeqhiJP/84EPm1pP8/program-ic-qK3IeqhiJP.png?v=1486455650733"></img>
      </div>

      <div className="text-container">
        <div className="title">{this.props.program.title}</div>
        <div className="sub-title">{this.props.program.subtitle}</div>
      </div>

      <div className="right-container">
        <div className="right-decorator">
          <div>
            <a>
        	    <img className="chevron" src="/assets/chevron_right.png"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  }
})