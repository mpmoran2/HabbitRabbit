class Habit < ApplicationRecord
    # belongs_to :user
    has_many :done_days

    validates :name, :goal, presence: true
    

    def update_streak(done_days)
        if done_days.do_nodo == 'Done'
            self.streak = self.streak + done_days.do_nodo
            self.save
        elsif done_days.do_nodo == 'Not Done'
            if self.streak >= done_days.do_nodo
                self.streak = self.streak - done_days.do_nodo
                self.save
            else
                return 'This habit has not Streaks'
            end
        end        
    end 
end

