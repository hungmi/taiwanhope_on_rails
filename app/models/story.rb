class Story < ApplicationRecord
	validates :title, presence: true
	has_one_attached :cover
end