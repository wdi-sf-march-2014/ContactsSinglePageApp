require 'spec_helper'

describe Contact do
    
    before (:each) do
      @contact = Contact.create(name: "Joshua Pearson", number: "1234567899", email: "Joe@Jeff.com", image: "http://img156.imageshack.us/img156/8089/photo2520.jpg")
    end

    it 'contact should have a valid name' do
      contact = Contact.create(number: "1234567899", email: "Joe@Jeff.com", image: "http://img156.imageshack.us/img156/8089/photo2520.jpg")
      @contact.should be_valid
      contact.should_not be_valid
    end

    it 'contact should have a valid email' do
      contact = Contact.create(number: "1234567899", name: "Joshua Pearson", image: "http://img156.imageshack.us/img156/8089/photo2520.jpg")
      @contact.should be_valid
      contact.should_not be_valid      
    end

    it 'contact should have a valid number' do
      contact = Contact.create(name: "Joshua Pearson", email: "Joe@Jeff.com", image: "http://img156.imageshack.us/img156/8089/photo2520.jpg")
      @contact.should be_valid
      contact.should_not be_valid      
    end

    it 'contact should have a valid image url' do
      contact = Contact.create(number: "1234567899", email: "Joe@Jeff.com", name: "Joshua Pearson")
      @contact.should be_valid
      contact.should_not be_valid      
    end
end
