Rails.application.routes.draw do
  
  resources :users
  resources :habits do
    resources :dones
  end

end 

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# resources :users, only: [:new, :create, :show]
# resources :sessions, only: [:new, :create]