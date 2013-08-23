class AddDetailsInAddresses < ActiveRecord::Migration
  
  def change
    add_column :addresses, :address, :string
    add_column :addresses, :address1, :text
  end
  
end
