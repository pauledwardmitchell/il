class StripeController < ApplicationController

  protect_from_forgery :except => :webhook

  def webhook
    render status: 200
  end

end
