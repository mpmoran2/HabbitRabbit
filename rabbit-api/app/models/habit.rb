class Habit < ApplicationRecord
    # belongs_to :user
    has_many :dones

    validates :name, :goal, :start_day, presence: true    

    # def update_streak(done_days)
    #     if done.do_nodo == 'Done'
    #         self.streak = self.streak + done.count
    #         self.save
    #     elsif done.do_nodo == 'Not Done'
    #         if self.streak >= dones.do_nodo
    #             self.streak = self.streak - done.count
    #             self.save
    #         else
    #             return 'This habit has no Streaks'
    #         end
    #     end        
    # end 

    # def update_streat_on_delete(done)
    #     if done.do_nodo == 'Done'
    #         if self.streak >= done.count
    #             self.streak = self.streak - done.count
    #             self.save
    #         else
    #             return "There are no Streaks"
    #         end
    #     elsif done.do_nodo == 'Not Done'
    #         self.streak = self.streak + done.count
    #         self.save
    #     end
    # end
    
end

