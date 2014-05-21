class Contact < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
  validates :number, presence: true
  validates :image, presence: true
end
