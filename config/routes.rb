Rails.application.routes.draw do
	root "pages#home"
  resources :stories
  resources :albums
  controller "pages" do
  	get 'home'
  	get 'about'
  	get 'contact'
  	get 'love'
  end
  get 'admin', to: redirect('/')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	namespace :admin do
		resources :stories
		resources :albums
		resources :users
	  get 'signin', to: 'sessions#new'
	  post 'signin', to: 'sessions#create'
	  delete 'logout', to: 'sessions#destroy'
	end
end
