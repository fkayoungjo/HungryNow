class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.string :user_id
      t.string :url
      t.string :label

      t.timestamps
    end
  end
end
