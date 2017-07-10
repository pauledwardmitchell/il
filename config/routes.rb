Rails.application.routes.draw do

  devise_for :users
  root to: "programs#landing"

  get 'list', to: 'programs#list'
  get '/teachers', to: 'programs#teachers'
  get '/profile', to: 'programs#profile'

  resources :tracks, only: [:show]

  #teachers:
  get 'michael-jordan-laskey', to: 'programs#michaeljordanlaskey'
  get 'gen-jordan-laskey', to: 'programs#genjordanlaskey'
  get 'collen-mayer', to: 'programs#collenmayer'
  get 'paul-mitchell', to: 'programs#paulmitchell'
  get 'aimee-shelide-mayer', to: 'programs#aimeeshelidemayer'
  get 'casey-stanton', to: 'programs#caseystanton'

  #programs:
  get 'the-way-of-all-the-earth', to: 'programs#thewayofalltheearth'
  get 'to-bless-the-space-between-us', to: 'programs#toblessthespacebetweenus'

  #stripe:
  post '/webhook', to: 'stripe#webhook'

  resources :charges

  post 'monthly_subscription', to: 'charges#monthly_subscription_create'
  post 'yearly_subscription', to: 'charges#yearly_subscription_create'
  post 'forever_subscription', to: 'charges#forever_subscription_create'

  #development:
  get 'logout_link', to: 'programs#logout_link'

end
