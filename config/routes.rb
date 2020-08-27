Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do
      resources :routes, only: [:index]
      resources :workouts, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :routes, only: [:create, :destroy, :show, :update]
    resources :workouts, only: [:create, :destroy, :update]
  end

  root "static_pages#root"
end
