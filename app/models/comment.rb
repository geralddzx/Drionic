# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  content    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Comment < ActiveRecord::Base
end
