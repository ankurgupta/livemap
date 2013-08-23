class AddressesController < ApplicationController

  def index
    @addresses = Address.all
    respond_to do |format|
      format.html
      format.json { render json: @addresses }
    end
  end

  def create
    @address = Address.new(params[:address])
    if @address.valid?
      Pusher['address_channel'].trigger('my_event', params[:address].to_json)
      @address.save
    end
    render nothing: true
  end

end
