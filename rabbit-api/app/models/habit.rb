class Habit < ApplicationRecord
    # belongs_to :user
    has_many :dones

    validates :name, :goal, :start_day, presence: true    

    def update_streak(dones)
        if dones.do_nodo == 'Done'
            self.streak = self.streak + self.dones.count
            self.save
        elsif dones.do_nodo == 'Not Done'
            if self.streak >= dones.do_nodo
                self.streak = self.streak - self.dones.count
                self.save
            else
                return 'This habit has no Streaks'
            end
        end        
    end 

    def update_streak_on_delete(done)
        if dones.do_nodo == 'Done'
            if self.streak >= self.dones.count
                self.streak = self.streak - self.dones.count
                self.save
            else
                return "There are no Streaks"
            end
        elsif dones.do_nodo == 'Not Done'
            self.streak = self.streak + self.dones.count
            self.save
        end
    end
    
end

