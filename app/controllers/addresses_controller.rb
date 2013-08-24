class AddressesController < ApplicationController

  def index
    @addresses = Address.all
    respond_to do |format|
      format.html
      format.json { render json: @addresses }
    end
  end

  def create
    begin
      coordinates = Geocoder.coordinates(params[:address])
      if coordinates
        @address = Address.create!(:address => params[:address], :latitude => coordinates[0], :longitude => coordinates[1])
        Pusher['address_channel'].trigger('my_event', {address: coordinates}.to_json)
      end
    rescue
    end
    render nothing: true
  end

end
