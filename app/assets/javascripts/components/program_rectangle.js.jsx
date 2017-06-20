const ProgramRectangle = React.createClass ({

  lockedProgram: function() {
    return (
      <section className='top-program-box-shadow'>
        <section className='top-program-box'>
          <a>
            <section className='top-program-box-pic'>
              <section className='title'>
                { this.props.program.title }
                <section className='free-button'>Free</section>
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
      <section className='top-program-box-shadow'>
        <section className='top-program-box'>
          <a href="/the-way-of-all-the-earth">
            <section className='top-program-box-pic'>
              <section className='title'>
                { this.props.program.title }
                <section className='free-button'>Free</section>
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
    if (this.props.access === true) {
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
