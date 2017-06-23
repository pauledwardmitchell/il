const ProgramsBox = React.createClass({

  programLength: function() {
    return this.props.programs_hashes.length
  },

  allProgramsButFirst: function() {
    var allPrograms = this.props.programs_hashes
    var programsMinusFirst = []

    for (i = 1; i < this.props.programs_hashes.length; i++) {
      programsMinusFirst.push(this.props.programs_hashes[i])
    }

    return programsMinusFirst
  },

  allProgramsButFirstAndLast: function() {
    var allPrograms = this.props.programs_hashes
    var programsMinusFirstAndLast = []

    for (i = 1; i < this.props.programs_hashes.length-1; i++) {
      programsMinusFirstAndLast.push(this.props.programs_hashes[i])
    }

    return programsMinusFirstAndLast
  },

  geometricConfiguration: function() {
    switch (this.programLength()) {
      case 1:
        return (
          <ProgramRectangle
            program={this.props.programs_hashes[0]}
            access={this.props.access}/>
        )
        break
      case 2:
        return (
          <div>
            {this.props.programs_hashes.map((program) => {
              return <ProgramRectangle
                       key={program.id}
                       program={program}
                       access={this.props.access}/>
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
            <ProgramRectangle
              program={this.props.programs_hashes[0]}
              access={this.props.access}/>
            <section className='after-top-program-box'>
              {this.allProgramsButFirst().map((program) => {
                return <ProgramSquare
                         key={program.id}
                         program={program}
                         access={this.props.access}/>
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
            <ProgramRectangle
              program={this.props.programs_hashes[0]}
              access={this.props.access}/>
            <section className='after-top-program-box'>
              {this.allProgramsButFirstAndLast().map((program) => {
                return <ProgramSquare
                         key={program.id}
                         program={program}
                         access={this.props.access}/>
                }
              )}
            </section>
            <ProgramRectangle
              program={this.props.programs_hashes[this.props.programs_hashes.length-1]}
              access={this.props.access}/>
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
