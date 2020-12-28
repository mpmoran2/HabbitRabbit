class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :goal, :start_day, :streak #, :user_id
  has_many :dones
end
