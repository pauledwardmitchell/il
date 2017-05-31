require 'rails_helper'

RSpec.describe 'NotiifcationsMailer', :type => :mailer do
  describe "confirm monthly subscription" do
    let(:user) { FactoryGirl.create(:user) }
    let(:mail) { NotificationsMailer.monthly_subscribe(user) }

    it "renders the headers" do
      expect(mail.subject).to eq("Your monthly subscription")
      expect(mail.to).to eq(["to@example.com"])
      expect(mail.from).to eq(["donotreply@il.com"])
    end

    it "renders the body" do
      expect(mail.body).not_to be_empty
    end
  end

  describe "confirm yearly subscription" do
    let(:user) { FactoryGirl.create(:user) }
    let(:mail) { NotificationsMailer.yearly_subscribe(user) }

    it "renders the headers" do
      expect(mail.subject).to eq("Your yearly subscription")
      expect(mail.to).to eq(["to@example.com"])
      expect(mail.from).to eq(["donotreply@il.com"])
    end

    it "renders the body" do
      expect(mail.body).not_to be_empty
    end
  end

end
