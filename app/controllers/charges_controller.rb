class ChargesController < ApplicationController

  def new
  end

  def monthly_subscription_create

    if current_user.stripe_customer_id == nil

      customer = Stripe::Customer.create(
        :email => params[:stripeEmail],
        :source  => params[:stripeToken]
      )

      current_user.stripe_customer_id = customer.id
      current_user.save

    end

    Stripe::Subscription.create(
      :customer => current_user.stripe_customer_id,
      :plan => "0001"
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

  def yearly_subscription_create

    if current_user.stripe_customer_id == nil

      customer = Stripe::Customer.create(
        :email => params[:stripeEmail],
        :source  => params[:stripeToken]
      )

      current_user.stripe_customer_id = customer.id
      current_user.save

    end

    Stripe::Subscription.create(
      :customer => current_user.stripe_customer_id,
      :plan => "0002"
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

  def forever_subscription_create

    if current_user.stripe_customer_id == nil

      customer = Stripe::Customer.create(
        :email => params[:stripeEmail],
        :source  => params[:stripeToken]
      )

      current_user.stripe_customer_id = customer.id
      current_user.save

    end

    charge = Stripe::Charge.create(
      :customer    => current_user.stripe_customer_id,
      :amount      => 19999,
      :description => 'Rails Stripe customer FOREVER',
      :currency    => 'usd'
    )

    if charge
      current_user.access_forever = true
      current_user.save
    end

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
