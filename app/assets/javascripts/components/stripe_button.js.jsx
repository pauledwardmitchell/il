const StripeButton = React.createClass({

  handleClick: function() {

    var handler = StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        token.id
      }
    });

    document.getElementById('customButton').addEventListener('click', function(e) {
      // Open Checkout with further options:
      handler.open({
        name: 'Stripe.com',
        description: '2 widgets',
        zipCode: true,
        amount: 2000
      });
      e.preventDefault();
    });
  },

  render: function() {
    return (
      <div onClick={this.handleClick()}>

        <button>Purchase</button>

      </div>
    )
  }


})
