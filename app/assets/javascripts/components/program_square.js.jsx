const ProgramSquare = React.createClass({

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

  lockedProgram: function() {
    return (
      <section className='square-program-box-shadow'>
        <section className='square-program-box'>
          <a>
            <section className='square-program-box-pic'>
              <section className='title'>
                { this.props.program.title }
              </section>
              <section className='bottom'>
                <section className='bottom-centered'>
                  <section className='lock'>
                    <img src="https://www.simplehabit.com/static/ic_lock_white_24px.svg"></img>
                  </section>
                </section>
              </section>
            </section>
          </a>
        </section>
      </section>
    )
  },

  unlockedProgram: function() {
    return (
      <section className='square-program-box-shadow'>
        <section className='square-program-box'>
          <a href={this.programLink()}>
            <section className='square-program-box-pic'>
              <section className='title'>
                { this.props.program.title }
              </section>
              <section className='bottom'>
                <section className='bottom-centered'>
                  <section>
                    <section className="play-btn">
                      <img src="/assets/play-arrow-2x.png"></img>
                    </section>
                  </section>
                  <section>
                    <section>
                      <p>7 Sessions</p>
                      <p>5 min</p>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </a>
        </section>
      </section>
    )
  },

  renderLockedOrUnlocked: function() {
    if (this.props.access === true  || this.props.program.premium === false) {
      return this.unlockedProgram()
    } else {
      return this.lockedProgram()
    }
  },

  render: function() {
    return (
      this.renderLockedOrUnlocked()
    )
  }

})
