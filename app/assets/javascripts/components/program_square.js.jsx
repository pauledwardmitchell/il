const ProgramSquare = React.createClass({

  render: function() {
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
  }

})
