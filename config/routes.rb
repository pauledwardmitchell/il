Rails.application.routes.draw do

  devise_for :users
  root to: "programs#index"

  get '/test', to: 'programs#test'

  resources :tracks, only: [:show]

  resources :charges

end
