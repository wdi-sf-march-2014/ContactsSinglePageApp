class ChangeFieldName < ActiveRecord::Migration
  def change
  	rename_column(:contacts, :url, :picture)
  end
end
