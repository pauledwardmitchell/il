
const TeacherPicLink = React.createClass({

  fullName: function() {
    return this.props.teacher.first_name + " " + this.props.teacher.last_name
  },

  render: function() {
    return (
      <a href="/kate-james">
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
