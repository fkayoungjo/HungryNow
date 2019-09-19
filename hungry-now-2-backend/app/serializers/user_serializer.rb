class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :bio, :location
end
