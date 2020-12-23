Rails.application.routes.draw do
  namespace :api do
    # resources :users, only: [:new, :create, :show]
    # resources :sessions, only: [:new, :create]
    resources :habits do
      resources :done_days
    end
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
