const ProgramLittleSquare = React.createClass({

  getInitialState: function() {
    return { hover: false }
  },

  toggleHover: function() {
    this.setState( {hover: !this.state.hover} )
  },

  programLink: function() {
    var name = this.props.program.title
    name = name.toLowerCase()
    var splitName = name.split(" ")
    var link = "/"

    for(i = 0; i < splitName.length; i++) {
      link = link.concat(splitName[i])
      link = link.concat("-")
    }

    link = link.slice(0, -1)
    return link
  },

  unlockedProgram: function() {

    var innerBottom = {
          padding: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }

    var titleStyle = {
          fontSize: 14,
          fontWeight: 300,
          paddingBottom: 10,
          textAlign: 'right'
        }

    var linkStyle;
    if (this.state.hover) {
      linkStyle = { display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 1 }
    } else {
      linkStyle = { display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: .5 }
    }

    return(
      <section style={innerBottom}>
        <section style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <img src="/assets/play-arrow-2x.png"></img>
        </section>
        <section>
          <p style={titleStyle}>
            7 Sessions
          </p>
        </section>
      </section>
    )
  },

  lockedProgram: function() {
    var innerBottom = {
          padding: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }

    var linkStyle = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }

    var lockStyle;
      if (this.state.hover) {
        lockStyle = { height: 48,
                      width: 48,
                      opacity: 1 }
      } else {
        lockStyle = { height: 48,
                      width: 48,
                      opacity: .5 }
      }

  return (
    <section style={innerBottom}>
      <section style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <img style={lockStyle} src="https://www.simplehabit.com/static/ic_lock_white_24px.svg"></img>
       </section>
     </section>
  )
  },

  renderLockedOrUnlocked: function() {
    if (this.props.access === true || this.props.program.premium === false) {
      return this.unlockedProgram()
    } else {
      return this.lockedProgram()
    }
  },

  render: function() {

    const styles = {
      outerBox: {
        marginBottom: 8,
        marginRight: 8
      },

      innerBox: {
        overflow: 'hidden',
        marginRight: 0,
        backgroundColor: 'rgb(41, 51, 67)',
        width: 200,
        height: 240
      },

      link: {
        backgroundColor: 'rgb(34, 34, 34)',
        backgroundImage: `url('https://s3-us-west-2.amazonaws.com/innerlfie/Photos/cez2.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        height: 240,
        width: 200,
        color: 'rgb(34, 34, 34)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      },

      title: {
        width: 'auto',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 64,
        fontSize: 20,
        fontWeight: 300,
        letterSpacing: 0.8,
        color: 'rgb(255, 255, 255)',
        // background: linearGradient('rgba(0, 0, 0, 0.75)', 'rgba(0, 0, 0, 0)');
      },

      bottom: {
        width: 'auto',
        color: 'rgb(255, 255, 255)',
        // background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
      },

      innerBottom: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      },

      playBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .5
      }
    }

    return (
      <section style={styles.outerBox}>
        <section style={styles.innerBox}>
          <a href={this.programLink()}>
            <section style={styles.link}>
              <section style={styles.title}>
                {this.props.program.title}
              </section>
              <section style={styles.bottom}>
                {this.renderLockedOrUnlocked()}
              </section>
            </section>
          </a>
        </section>
      </section>


    )
  }

})
