const ProgramLittleSquare = React.createClass({

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
            </section>
          </a>
        </section>
      </section>


    )
  }

})
