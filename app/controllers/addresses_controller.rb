class AddressesController < ApplicationController

  def index
    @addresses = Address.all
    respond_to do |format|
      format.html
      format.json { render json: @addresses }
    end
  end

  def create
    #client      = Faye::Client.new('http://localhost:9292/faye')
    #client.publish('/addresses/new', params[:address].to_json)

    Pusher['address_channel'].trigger('my_event', params[:address].to_json)

    @address     = Address.create!(params[:address])
    render nothing: true
  end

end
