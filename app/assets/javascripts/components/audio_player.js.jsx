

const AudioPlayer = React.createClass({

  getInitialState: function() {
    return {
      circlePercentage: 90,
      isPlaying: false
    }
  },

  componentDidMount: function(){
    this.timerID = setInterval(
      () => this.getCirclePercentage(),
      100
    );
  },

  getCirclePercentage: function() {
    this.setState({
      circlePercentage: this.circlePercentage()
    })
  },

  circlePercentage: function() {
    return this.audioEl.currentTime / this.audioEl.duration * 100
  },

 timeRemaining: function() {
  	if (this.audioEl == undefined) {
  	  return "-:--"
  	} else {
      return this.audioEl.duration - this.audioEl.currentTime
  	}
  },

  formatTime: function(number) {
    var minutes = Math.floor(number / 60);
    var seconds = Math.floor(number - (minutes*60));

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return minutes+":"+seconds
  },

  togglePlaying: function() {
    if (this.state.isPlaying === false) {
      this.audioEl.play()
      this.setState({ isPlaying: !this.state.isPlaying})	
    } else {
      this.audioEl.pause()
      this.setState({ isPlaying: !this.state.isPlaying})
    }
  },

  buttonIcon: function() {
  	if (this.state.isPlaying === true) {
  	  return "/assets/pause-2x.png"
  	} else {
  	  return "/assets/play-arrow-2x.png"	
  	}
  },

  render: function(){
    
    return(
        <div style={this.props.style.circleBox}>
          <audio ref={(ref) => { this.audioEl = ref; }} onPlay={this.onPlay}  >
            <source src={this.props.track.link}></source>
          </audio>
          <a style={this.props.style.button} onClick={this.togglePlaying} >
            <img src={this.buttonIcon()} />
          </a>
          <Circle
              style={this.props.style.circle}
              percent={this.state.circlePercentage}
              strokeWidth="3"
              strokeLinecap="square"
              trailColor="373F4E"
              strokeColor='blue' // strokeColor={this.state.color}
            />
          <section>
            <p style={this.props.style.text} >{this.formatTime(this.timeRemaining())}</p>
          </section>
        </div>

    )

  }

})