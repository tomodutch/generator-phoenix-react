defmodule <%= moduleName %>.E2E.IndexTest do
  use ExUnit.Case
  use Hound.Helpers

  hound_session
  test "should get page title" do
    navigate_to("/")
    assert "Hello from React!" == page_title
  end
end
