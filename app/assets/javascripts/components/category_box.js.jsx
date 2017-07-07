const CategoryBox = React.createClass({

  getInitialState: function() {
    return { expanded: false }
  },

  handleClick: function() {
    this.setState( { expanded: !this.state.expanded } )
  },

  renderBoxes: function() {
    if (this.state.expanded === false) {
      return(
        this.props.programs.slice(0,3).map((program) => {
            return <ProgramLittleSquare
                     key={program.id}
                     program={program}
                     access={this.props.access}/>
            }
        )
      )
    } else {
      return(
        this.props.programs.map((program) => {
            return <ProgramLittleSquare
                     key={program.id}
                     program={program}
                     access={this.props.access}/>
            }
        )
      )
    }
  },

  renderButton: function() {

    if (this.state.expanded === false) {
      return(
        <a onClick={this.handleClick} style={{fontSize: 18,
    fontWeight: 400, color: 'white'}}>Show all</a>
      )
    } else {
      return(
        <a onClick={this.handleClick} style={{fontSize: 18,
    fontWeight: 400, color: 'white'}}>Show less</a>
      )
    }

  },

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

        <section style={styles.title}>{this.props.title}</section>

        <section style={styles.alignment}>

          {this.renderBoxes()}
          {this.renderButton()}

        </section>

      </section>
    )
  }

})
