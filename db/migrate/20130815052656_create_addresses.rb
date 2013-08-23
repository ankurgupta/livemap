class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.decimal :latitude, :precision=>16, :scale=>12
      t.decimal :longitude,:precision=>16, :scale=>12
      t.timestamps
    end
  end
end
