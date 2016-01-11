defmodule <%= moduleName %>.PageController do
  use <%= moduleName %>.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
