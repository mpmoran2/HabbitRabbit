class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :rabbit_name, :description, :goal, :start_day, :streak #, :user_id
  has_many :dones
end
