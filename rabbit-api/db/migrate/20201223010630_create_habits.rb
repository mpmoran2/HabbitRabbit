class CreateHabits < ActiveRecord::Migration[6.0]
  def change
    create_table :habits do |t|
      t.string :name
      t.string :rabbit_name
      t.text :description
      t.integer :goal
      t.date :start_day
      t.integer :streak, default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
