require 'spec_helper'

describe '/contacts' do

  before (:each) do
    @contacts = Contact.create!([{name: "Joshua Pearson", number: "1234567899", email: "Joe@Jeff.com", image: "http://img156.imageshack.us/img156/8089/photo2520.jpg"}])
  end

  describe 'GET with JSON' do
    before (:each) do
      get '/contacts.json'
      @result = JSON.parse(response.body)
    end

    it 'returns all contacts' do
      @result.should_not be_nil
      @result.should have(1).contact
    end

    it 'should have the correct data in the contacts' do
      @result.find do |contact|
        contact["name"] == "Joshua Pearson"
      end.should_not be_nil
    end
  end
end