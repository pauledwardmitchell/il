class ChargesController < ApplicationController

  def new
  end



  def create
    # Amount in cents
    @amount = 500 #don't hard code this

    #take entered email
    #search if there is a stripe customer obj in my account
    #if so - get customer.id somehow to create charge with
    #if not - make it by hitting code below

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Rails Stripe customer',
      :currency    => 'usd'
    )

    binding.pry

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
