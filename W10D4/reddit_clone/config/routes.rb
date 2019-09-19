Rails.application.routes.draw do
  resources :users, only: [:create, :show, :new, :index]
  resource :session, only: [:new, :create, :destroy]
  resources :subs, except: [:destroy] do
    resources :posts, only: [:create, :edit, :new, :update]
  end
  resources :posts, except: [:index, :create, :edit, :new, :update]
end
