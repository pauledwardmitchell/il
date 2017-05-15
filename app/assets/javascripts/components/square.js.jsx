
const Square = React.createClass({

  handleScroll: function() {
    console.log('yo')
  },

  render: function() {
    return(
      <section className='square' onScroll={this.handleScroll}> HAHAH</section>
    )
  }
})
