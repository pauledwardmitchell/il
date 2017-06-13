Rails.application.routes.draw do

  devise_for :users
  root to: "programs#index"

  get '/landing', to: 'programs#landing'
  get '/test', to: 'programs#test'
  get '/teachers', to: 'programs#teachers'
  get '/teacher', to: 'programs#teacher'

  get 'michael-jordan-laskey', to: 'programs#michaeljordanlaskey'

  resources :tracks, only: [:show]

  post '/webhook', to: 'stripe#webhook'

  resources :charges

  post 'monthly_subscription', to: 'charges#monthly_subscription_create'
  post 'yearly_subscription', to: 'charges#yearly_subscription_create'
  post 'forever_subscription', to: 'charges#forever_subscription_create'

end
