class DoneSerializer < ActiveModel::Serializer
  attributes :id, :completed, :do_nodo, :streak_val, :habit_id
  belongs_to :habit
end
