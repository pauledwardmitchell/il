
const AudioInterface = React.createClass({
  

  render: function() {

	const styles = {
	  center: {
	  	margin: 'auto',
        width: '100%',
        height: '100%',
        // backgroundColor: 'black',
        textAlign: 'center',
        // border: 3,
        // padding: 10,
	  },

	  text: {
	  	// fontWeight: 'bold',
	  	color: 'white',
	  	fontFamily: 'avenir-book'

	  },
	  
	  circleBox: {
        position: 'relative',
        margin: 'auto',
        minWidth: 150,
        maxWidth: 150,
        minHeight: 150,
        maxHeight: 150
	  },

	  circle: {
	  	height: 150,
	  	paddingTop: 20,
	  	paddingBottom: 20,
	  	width: 150,
	  	position: 'relative',
	  	zIndex: 99
	  },

	  button: {
	  	backgroundColor: 'black',
	    // width: '10%',
	    // height: '10%',
	    // top: 100,
	    // left: 0,
	    // zIndex: 16,
	    // display: 'flex',
	    // alignItems: 'center',
	    // justifyContent: 'center',
	    position: 'absolute',
	    top: '47%',
	    left: '36%',
	    zIndex: 999
	  }
	}
    
  	return (
      <div style={styles.center}>
        <section style={styles.text} >
          <p >Title of the track</p>
          <p>sub-title of the track</p>
        </section>
        
        <AudioPlayer style={styles} />

      </div>
  	)
  }
})