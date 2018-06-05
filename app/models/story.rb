class Story < ApplicationRecord
	validates :title, presence: true
	has_one_attached :cover

	def date
		published_on.try(:strftime, "%Y/%m/%d") || created_at.strftime("%Y/%m/%d")
	end
end