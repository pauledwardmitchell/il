const ProgramInfoBox = React.createClass({

  fullTeacherName: function() {
    return this.props.teacher.first_name + " " + this.props.teacher.last_name
  },

  teacherLink: function() {
    var name = this.fullTeacherName()
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

  render: function() {
    return (
      <section className='program-info-box-container'>
        <section className='program-info-box'>
          <section className='program-info-box-title'>
            <h1> {this.props.program.title} </h1>
          </section>
          <a href={this.teacherLink()} className='teacher-link'>
            <section className='teacher-pic'>
              <img src= {this.props.teacher.pic_link} ></img>
            </section>
            <p className='by-line'>by {this.props.teacher.first_name} {this.props.teacher.last_name} </p>
          </a>
          <section className='program-blurb'>
            <h2> {this.props.program.explanation} </h2>
          </section>

        </section>
      </section>
    )
  }

})
