class StripeController < ApplicationController

  protect_from_forgery :except => :webhook

  def webhook

    if request.headers['Content-Type'] == 'application/json'
      data = JSON.parse(request.body.read)
    else
      # application/x-www-form-urlencoded
      data = params.as_json
    end

    if params[:type] == "account.updated"
      Notification.create(name: 'account updated')
    end



    # event_json = JSON.parse(request.body.read)

    # # Do something with event_json

    # status 200


    # # Capture the event information from the webhook params
    # event_id = params[:event]

    # # Verify that the event isn't forged to your Stripe account
    # event = Stripe::Event.retrieve(event_id)

    # render status: 200
  end

end
