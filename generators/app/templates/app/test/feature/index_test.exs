defmodule <%= moduleName %>.FeatureIndexTest do
  use ExUnit.Case
  use Hound.Helpers

  hound_session

  @tag :feature
  test "should get page title" do
    navigate_to("/")
    assert "Hello from React!" == page_title
  end
end
