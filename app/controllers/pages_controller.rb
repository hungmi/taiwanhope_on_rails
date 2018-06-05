class PagesController < ApplicationController
	before_action :skip_pundit

  def home
  end

  def about
  end

  def contact
  end

  def love
  end

  private

  def skip_pundit
  	skip_authorization
  end
end