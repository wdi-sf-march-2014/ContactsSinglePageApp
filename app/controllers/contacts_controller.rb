class ContactsController < ApplicationController

  def main
  end
  
  def index
    @contacts = Contact.all

    respond_to do |format|
      format.json { render json: @contacts, only: [:name, :email, :number, :imgUrl]}
    end
  end
end
