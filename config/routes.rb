Rails.application.routes.draw do

  devise_for :users
  root to: "programs#landing"

  # get '/test', to: 'programs#test'
  get 'list', to: 'programs#list'
  get '/teachers', to: 'programs#teachers'
  # get '/teacher', to: 'programs#teacher'

  get 'michael-jordan-laskey', to: 'programs#michaeljordanlaskey'
  get 'gen-jordan-laskey', to: 'programs#genjordanlaskey'
  get 'collen-mayer', to: 'programs#collenmayer'
  get 'paul-mitchell', to: 'programs#paulmitchell'
  get 'aimee-shelide-mayer', to: 'programs#aimeeshelidemayer'
  get 'casey-stanton', to: 'programs#caseystanton'


  get 'the-way-of-all-the-earth', to: 'programs#thewayofalltheearth'
  get 'to-bless-the-space-between-us', to: 'programs#toblessthespacebetweenus'

  resources :tracks, only: [:show]

  post '/webhook', to: 'stripe#webhook'

  resources :charges

  post 'monthly_subscription', to: 'charges#monthly_subscription_create'
  post 'yearly_subscription', to: 'charges#yearly_subscription_create'
  post 'forever_subscription', to: 'charges#forever_subscription_create'

  #development:
  get 'logout_link', to: 'programs#logout_link'

end
