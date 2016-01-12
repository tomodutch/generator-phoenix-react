use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :<%= atomName %>, <%= moduleName %>.Endpoint,
  http: [port: 4001],
  server: true

# Print only warnings and errors during test
config :logger, level: :warn

# Available web drivers can be found on:
# https://github.com/HashNuke/hound/blob/master/notes/configuring-hound.md
config :hound, driver: "chrome_driver"
