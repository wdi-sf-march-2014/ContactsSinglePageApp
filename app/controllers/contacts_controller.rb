class ContactsController < ApplicationController
  def main
  end

  def create
  end

def index
    @contacts = Contact.all
    respond_to do |f|
      f.json { render json: @contacts, only: [:name, :email, :number, :imgUrl]}
    end
  end
end
