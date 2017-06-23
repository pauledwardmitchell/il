const AdventureLink = React.createClass({

  formattedDuration: function() {
    return this.props.adventure.duration + " mins"
  },

  render: function() {
    return (
      <a href={"/tracks/"+this.props.adventure.id}>
        <section className='link-box'>
          <section className='title-box'>
            <p className='adventure-number'>{this.props.numberOrder}</p>
            <p className='adventure-title'>{this.props.adventure.title}</p>
          </section>
          <section className='adventure-duration'>{this.formattedDuration()}</section>
        </section>
      </a>
    )
  }

})
