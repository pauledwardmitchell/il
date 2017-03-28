Rails.application.routes.draw do

  root to: "programs#index"

  resources :tracks, only: [:show]

end
