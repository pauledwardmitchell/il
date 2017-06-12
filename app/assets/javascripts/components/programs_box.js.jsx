const ProgramsBox = React.createClass({

  programLength: function() {
    return this.props.programs.length
  },

  geometricConfiguration: function() {
    switch (this.programLength()) {
      case 1:
        return (
          <ProgramRectangle program={ this.props.programs[0] }/>
        )
        break
      case 2:
        return (
          <div>
            {this.props.programs.map(function(program) {
              return <ProgramRectangle
                       key={program.id}
                       program={program}/>
              }

            )}
          </div>
        )
        break
    }
  },

  render: function() {
    return (
      <section className='teacher-programs-box'>

        <section className='teacher-programs-title'>
          Meditations Guided by {this.props.teacher.first_name}
        </section>

        <section className='teacher-programs-squares-box'>

        {this.geometricConfiguration()}

          <section className='after-top-program-box'>
            <section className='square-program-box-shadow'>
              <section className='square-program-box'>
                <a>
                  <section className='square-program-box-pic'>
                    <section className='title'>Little Blue Truck
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

          </section>

        </section>

      </section>


    )
  }

})
