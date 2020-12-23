class DoneSerializer < ActiveModel::Serializer
  attributes :id, :completed, :do_nodo, :habit_id
end
