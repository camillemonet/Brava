class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, :email, presence: true 
  validates :username, :session_token, :email, uniqueness: true 
  validates :password, length: { minimum: 6 }, allow_nil: true 

  after_initialize :ensure_session_token

  has_many :routes,
    foreign_key: :user_id,
    class_name: :Route

  has_many :workouts,
    foreign_key: :user_id,
    class_name: :Workout 

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user && @user.is_password?(password)
      @user
    else
      nil 
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64 
  end

end
