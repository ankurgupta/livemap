class AddressesController < ApplicationController
  
  def index
    @addresses = Address.all
  end

  def create
    client = Faye::Client.new('http://localhost:9292/faye')
    client.publish('/addresses/new', params[:address].to_json)
    @address = Address.create!(params[:address])
    render nothing: true
  end
  
end
