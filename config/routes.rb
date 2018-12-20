Rails.application.routes.draw do
  namespace :api do
    resources :blogs
  end

  get '*other', to: 'static#index'
end
