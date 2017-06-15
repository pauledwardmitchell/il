const AdventureLink = React.createClass({

  formattedDuration: function() {
    return this.props.adventure.duration + ":00"
  },

  render: function() {
    return (
      <a>
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
