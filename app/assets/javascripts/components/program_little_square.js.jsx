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
    }

    return (
      <section style={styles.outerBox}>
        <section style={styles.innerBox}>
        </section>
      </section>


    )
  }

})
