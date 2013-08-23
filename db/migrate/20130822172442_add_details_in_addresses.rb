class AddDetailsInAddresses < ActiveRecord::Migration
  
  def change
    add_column :addresses, :address, :text
  end
  
end
