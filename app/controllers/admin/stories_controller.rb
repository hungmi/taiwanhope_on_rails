class Admin::StoriesController < AdminController
  before_action :set_story, only: [:show, :edit, :update, :destroy]
  before_action :set_search

  # GET /stories
  def index
    authorize [:admin, :story], :index?
    @stories = @q.result(distinct: true).order(updated_at: :desc)
  end

  # GET /stories/1
  def show
  end

  # GET /stories/new
  def new
    @story = Story.new
    authorize [:admin, @story]
  end

  # GET /stories/1/edit
  def edit
  end

  # POST /stories
  def create
    @story = Story.new(story_params)
    authorize [:admin, @story]

    if @story.save
      flash[:success] = I18n.t('flash.create_success')
      redirect_to [:admin, @story]
    else
      render :new
    end
  end

  # PATCH/PUT /stories/1
  def update
    if @story.update(story_params)
      @story.cover.purge_later if params[:story][:remove_cover].present?
      flash[:success] = I18n.t('flash.update_success')
      redirect_to [:admin, @story]
    else
      render :edit
    end
  end

  # DELETE /stories/1
  def destroy
    @story.destroy
    flash[:success] = I18n.t('flash.destroy_success')
    redirect_to admin_stories_url
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    	authorize [:admin, @story]
    end

    def set_search
      @q = Story.ransack(params[:q])
      @nav_search_symbol = :id_eq
      @nav_search_placeholder = nil
    end

    # Only allow a trusted parameter "white list" through.
    def story_params
      params.require(:story).permit(:title, :description, :published_on, :cover)
    end
end