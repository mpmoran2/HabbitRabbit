class Done < ApplicationRecord
    belongs_to :habit
    # belongs_to :user, through: :habit

    validates :do_nodo, presence: true
    validates_inclusion_of :do_nodo, :in => ['Done', 'Not Done']
end

