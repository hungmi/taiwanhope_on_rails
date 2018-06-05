class Album < ApplicationRecord
	validates :title, presence: true
	has_many_attached :images
end