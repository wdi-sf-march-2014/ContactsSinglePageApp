class Contact < ActiveRecord::Base
  validates :name, presence: true, length: { minimum: 1 }
  validates :email, presence: true, length: { minimum: 1 }
  validates :phone, presence: true, length: { minimum: 1 }
  validates :imgUrl, presence: true, length: { minimum: 1 }
end
