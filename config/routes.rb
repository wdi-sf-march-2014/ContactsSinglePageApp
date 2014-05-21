ContactsSinglePageApp::Application.routes.draw do
	
  root 'contacts#main'
  resources :contacts, only: [:index, :create]

end
