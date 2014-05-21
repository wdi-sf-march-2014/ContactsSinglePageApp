class ContactsController < ApplicationController

  def main
  end

  def index
    @contacts = Contact.all

    respond_to do |format|
      format.json { render json: @contacts, :only => [:id, :name, :email, :number, :image]}
    end
  end
  
end
