class ContactsController < ApplicationController
	respond_to :json, :html

  def main
  end

  def index
  	@contacts = Contact.all
  	render :json => @contacts, :only => [:name, :email, :phone, :picture]
  end

  def create
  	Contact.create(name: params[:name], email: params[:email], phone: params[:phone], picture: params[:picture])
  	render :json => {status: "completed"}
  end

end
