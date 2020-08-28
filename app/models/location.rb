class Location < ApplicationRecord
  validates :latitude, :longitude, :route_id, presence: true
  validates :order, uniqueness: { scope: :route_id }

  belongs_to :route, 
    foreign_key: :route_id,
    class_name: :Route

end
