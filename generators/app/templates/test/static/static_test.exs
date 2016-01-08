defmodule PhoenixChat.StaticTest do
  use ExUnit.Case

  @tag :integration
  test "static react" do
    {resp, code} = System.cmd("npm", ["test"])
    assert(code == 0, resp)
  end
end
