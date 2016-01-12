defmodule <%= moduleName %>.FeatureIndexTest do
  use ExUnit.Case
  use Hound.Helpers

  hound_session

  @tag :feature
  test "should get page title" do
    navigate_to("/")
    element = {:class, "app"}
    # Wait until React is done loading
    <%= moduleName%>.Retryer.element_visible?(element)
    assert "Hello from React!" == page_title
  end
end
