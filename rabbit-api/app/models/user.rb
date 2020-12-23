class User < ApplicationRecord
    # has_secure_password
    # validates :username, :password, presence: true
    
    # has_many :habits
    # has_many :done_days
    # has_many :sessions, => {order "created_at DESC"}
    
    # def streak 
    #   streak_count = 0
    #   today = Time.now.to_date
    
    #   dates_array = self.sessions.map do |session|
    #       session.created_at.to_date
    #   end
    
    #   unique_dates = dates.array.unique
    
    #   unique_dates.reduce(today) do |memo, date|
    #       yesterday = memo.yesterday.to_date
    #           if date = yesterday || date = today
    #               streak_count += 1 
    #               memo = date 
    #           end
    #   end
    #   streak_count
    # end    
end

