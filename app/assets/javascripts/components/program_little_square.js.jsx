const ProgramLittleSquare = React.createClass({

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
      }
    }

    return (
      <section style={styles.outerBox}>
        <section style={styles.innerBox}>
          <a>
            <section style={styles.link}>
            </section>
          </a>
        </section>
      </section>


    )
  }

})
