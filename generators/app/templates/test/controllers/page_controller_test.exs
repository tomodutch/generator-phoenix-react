defmodule <%= moduleName %>.PageControllerTest do
  use <%= moduleName %>.ConnCase

  test "GET /", %{conn: _conn} do
    # conn = get conn, "/"
    # assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
