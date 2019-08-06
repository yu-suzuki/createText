class AddScoreToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :score, :integer, null: false, default: 0
  end
end
