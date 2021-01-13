class Habit < ApplicationRecord
    has_many :dones

    validates :name, :rabbit_name, :description, :goal, :start_day, presence: true    

    def update_streak(dones)
        if dones.do_nodo == 'Yes'
            self.save            
            self.streak = self.streak + 1
        else dones.do_nodo == 'Incomplete'
            self.save            
            self.streak = 0
        end        
        self.save
    end 

    def update_streak_on_delete(dones)
        if dones.do_nodo == 'Yes'
            self.streak = self.dones.count - 1
            self.save 
        elsif dones.do_nodo == 'Incomplete'
            self.save
            self.streak = self.dones.count - 1
        end        
        self.save
    end
    
     
end

