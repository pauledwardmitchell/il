
const TeacherPicLink = React.createClass({

  fullName: function() {
    return this.props.teacher.first_name + " " + this.props.teacher.last_name
  },

  teacherLink: function() {
    var name = this.fullName()
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
      <a href={this.teacherLink()}>
        <section className="center">
          <section className="inline">
            <section className="borders">
              <img src={this.props.teacher.pic_link}>
              </img>
            </section>
          </section>
          <section className="teachers-text">
            <h1>{this.fullName()}</h1>
          </section>
        </section>
      </a>
    )
  }

})
