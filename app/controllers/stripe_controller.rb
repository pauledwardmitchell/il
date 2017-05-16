class StripeController < ApplicationController

  protect_from_forgery :except => :webhook
  authenticate_user! :except => :webhook

  def webhook
    # Capture the event information from the webhook params
    event_id = params[:event]

    # Verify that the event isn't forged to your Stripe account
    event = Stripe::Event.retrieve(event_id)

    p event_id

    p event

    render status: 200
  end

end
