class CreateDones < ActiveRecord::Migration[6.0]
  def change
    create_table :dones do |t|
      t.date :completed
      t.string :do_nodo
      t.integer :habit_id
      
      t.timestamps
    end
  end
end
