class Habit < ApplicationRecord
    # belongs_to :user
    has_many :dones

    validates :name, :goal, :start_day, presence: true    

    def update_streak(dones)
        if dones.do_nodo == 'Done'
            self.streak = self.streak + self.dones.includes('Done').count
            self.save
        else dones.do_nodo == 'Not Done'
            self.streak = self.streak + 0
            self.save
        end        
    end 

    def update_streak_on_delete(done)
        if dones.do_nodo == 'Done'
            if self.streak >= self.dones.count
                self.streak = self.streak - self.dones.includes('Done').count
                self.save
            else
                return "There are no Streaks"
            end
        elsif dones.do_nodo == 'Not Done'
            self.streak = self.streak + 0
            self.save
        end
    end
    
end

