class StoriesController < ApplicationController
  before_action :set_story

  def show
  end

  private

  def set_story
    @story = Story.find(params[:id])
    authorize @story
  end
end