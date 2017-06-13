const ProgramsBox = React.createClass({

  programLength: function() {
    return this.props.programs.length
  },

  allProgramsButFirst: function() {
    var allPrograms = this.props.programs
    var programsMinusFirst = []

    for (i = 1; i < this.props.programs.length; i++) {
      programsMinusFirst.push(this.props.programs[i])
    }

    return programsMinusFirst
  },

  allProgramsButFirstAndLast: function() {
    var allPrograms = this.props.programs
    var programsMinusFirstAndLast = []

    for (i = 1; i < this.props.programs.length-1; i++) {
      programsMinusFirstAndLast.push(this.props.programs[i])
    }

    return programsMinusFirstAndLast
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
      case 3:
      case 5:
      case 7:
      case 9:
      case 11:
        return (
          <div>
            <ProgramRectangle program={ this.props.programs[0] }/>
            <section className='after-top-program-box'>
              {this.allProgramsButFirst().map(function(program) {
                return <ProgramSquare
                         key={program.id}
                         program={program}/>
                }
              )}
            </section>
          </div>
        )
        break
      case 4:
      case 6:
      case 8:
      case 10:
      case 12:
        return (
          <div>
            <ProgramRectangle program={ this.props.programs[0] }/>
            <section className='after-top-program-box'>
              {this.allProgramsButFirstAndLast().map(function(program) {
                return <ProgramSquare
                         key={program.id}
                         program={program}/>
                }
              )}
            </section>
            <ProgramRectangle program={ this.props.programs[3] }/>
          </div>
        )
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

        </section>

      </section>


    )
  }

})
