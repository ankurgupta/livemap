require 'pusher'
Pusher.url = ENV['PUSHER_API_URL']
Pusher.logger = Rails.logger