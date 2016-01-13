defmodule <%= moduleName %>.FeatureIndexTest do
  use ExUnit.Case
  use Hound.Helpers

  hound_session

  @tag :feature
  test "should get page title" do
    navigate_to("/")
    assert "Hello from React!" == page_title
  end

  @tag :feature
  test "submit form" do
    navigate_to("/")
    message = "Hi!"

    elm = find_element(:name, "message")
    elm |> fill_field(message)
    elm |> submit_element

    assert message == dialog_text()
  end
end
