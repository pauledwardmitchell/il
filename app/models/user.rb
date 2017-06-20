class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  def access

    stripe_subscription_status =
      Stripe::Customer.retrieve(self.stripe_customer_id).subscriptions.data[0].status

    if self.access_forever == true
      true
    elsif stripe_subscription_status == 'active' || stripe_subscription_status == 'trialing'
      true
    else
      false
    end

  end

end
