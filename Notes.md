Habit belongs_to: user
    t.string :name
    t.datetime :start_day
    t.string :goal
    t.datetime :streak
    t.datetime :completed_day 
    t.integer :user_id
    <!-- # Habit.create(name: '', goal: '', start_date: YYYY-MM-DD, streak:  ) -->

Done_day belongs_to: habit
    t.datetime :completed
    t.string :do_nodo
    t.integer :habit_id  

    <!-- # DoneDays.create(completed: YYYY-MM-DD, do_nodo: '', habit_id: ) -->

User has_many: habits
    t.string :username
    t.string: password_digest
 


        


    



