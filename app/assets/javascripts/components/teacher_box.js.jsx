const TeacherBox = React.createClass ({

  fullName: function() {
    return this.props.teacher.first_name + " " + this.props.teacher.last_name
  },

  render: function() {
    return (
      <section className='teacher-box'>
        <section className='teacher-box-centered'>
          <section className='teacher-picture-box'>
            <section className='teacher-picture'>
              <img src={this.props.teacher.pic_link}></img>
            </section>
          </section>
          <section className='teacher-name'>{this.fullName()}</section>
          <section className='teacher-blurb'>
            {this.props.teacher.blurb}
          </section>
        </section>
      </section>
    )
  }

})
