class Route < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :locations, dependent: :destroy,
    foreign_key: :route_id,
    class_name: :Location

end
