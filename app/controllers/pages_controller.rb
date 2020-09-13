class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  layout 'application'

  def home
  end
end
