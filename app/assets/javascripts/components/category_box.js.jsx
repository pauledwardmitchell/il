const CategoryBox = React.createClass({


  render: function() {

    const styles = {
      outerBox: {
        border: 'rgb(41, 51, 67)',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(41, 51, 67, 0.3)',
        maxWidth: 720,
        width: '100%',
        alignItems: 'center',
        padding: 32,
        boxSizing: 'border-box',
        marginTop: 16
      },

      title: {
        fontSize: 20,
        fontWeight: 300,
        marginBottom: 16,
        color: 'white'
      },

      alignment: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      }
    }

    return(
      <section style={styles.outerBox}>

        <section style={styles.title}>Recommended Meditations</section>

        <section style={styles.alignment}>

          {this.props.programs.map((program) => {
            return <ProgramLittleSquare
                     key={program.id}
                     program={program}
                     access={this.props.access}/>
            }
          )}
        </section>

      </section>
    )
  }

})
