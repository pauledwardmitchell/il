const AdventuresList = React.createClass({

  numberOrder: function(adventure) {
    var numberOrder = 20

    for (i = 0; i < this.props.adventures.length; i++) {
      if (adventure.id === this.props.adventures[i].id) {
        numberOrder = i + 1
      }
    }

    return numberOrder
  },

  render: function() {
    return (
      <section>
        {this.props.adventures.map((adventure) => {
          return <AdventureLink
                   key={adventure.id}
                   numberOrder={this.numberOrder(adventure)}
                   adventure={adventure} />
          }
        )}
      </section>
    )
  }

})
