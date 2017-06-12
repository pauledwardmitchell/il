
const TeacherPicLinks = React.createClass({

  render: function() {
    return (
      <section className='teachers-pictures-box'>
        {this.props.teachers.map(function(teacher) {
          return <TeacherPicLink
                    key={teacher.id}
                    teacher={teacher} />
          }
        )}
      </section>
    )
  }

})
