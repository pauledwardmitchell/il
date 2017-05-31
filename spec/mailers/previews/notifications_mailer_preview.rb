class NotificationsMailerPreview < ActionMailer::Preview

  def monthly_subscribe_email
    NotificationsMailer.monthly_subscribe(User.first)
  end

end
