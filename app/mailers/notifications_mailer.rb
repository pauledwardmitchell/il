class NotificationsMailer < ApplicationMailer

  default from: 'donotreply@il.com'

  layout "mailer"

  def monthly_subscribe(user)
    mail(to: user.email,
         subject: "Your monthly subscription")
  end

  def yearly_subscribe(user)
    mail(to: user.email,
         subject: "Your yearly subscription")

  end

  def forever_subscribe

  end

end
