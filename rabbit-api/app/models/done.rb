class Done < ApplicationRecord
    belongs_to :habit
    
    validates :do_nodo, presence: true
    validates_inclusion_of :do_nodo, :in => ['Yes', 'Incomplete']

    
        
end

