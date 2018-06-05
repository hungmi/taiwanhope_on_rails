module ApplicationHelper
  def meta_title
    @page_title.present? ? '#{@page_title} | 台灣家庭希望' : '台灣家庭希望發展協會'
  end

  def notice_message(opts = {})
    if flash.any?
      flash.map do |type, message|
        content_tag :div, class: "alert alert-#{type}", role:'alert' do
          content_tag :strong, type.capitalize
          message
        end
      end[0]
    end
  end

  def not_desktop?
    browser = Browser.new(request.user_agent)
    browser.mobile? || browser.tablet?
  end

  def notice_message(opts = {})
    if flash.any?
      flash.map do |type, message|
        content_tag :div, class: "alert alert-#{type}", role:'alert' do
          content_tag :strong, type.capitalize
          message
        end
      end[0]
    end
  end
end
