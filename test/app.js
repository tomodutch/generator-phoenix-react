'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-phoenix-react:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['app_name'])
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      'README.md',
      'test/test_helper.exs',
      'webpack.config.js',
      'web/static/js/app.js'
    ]);
  });

  it('should delete app.tpl', function () {
    assert.noFile('web/static/js/app.js.tpl');
  });

  it('creates files with the correct module', function () {
    var moduleRegex = /defmodule AppName\./;
    var configRegex = /config \:app\_name\, AppName\.Endpoint/;

    assert.fileContent([
      ['mix.exs', moduleRegex],
      ['config/config.exs', configRegex],
      ['config/dev.exs', configRegex],
      ['config/prod.exs', configRegex],
      ['config/prod.secret.exs', configRegex],
      ['lib/app_name/endpoint.ex', /AppName/],
      ['lib/app_name.ex', /AppName/],
      ['test/controllers/page_controller_test.exs', /AppName/],
      ['test/support/channel_case.ex', /AppName/],
      ['test/support/conn_case.ex', /AppName/],
      ['test/views/error_view_test.exs', /AppName/],
      ['test/views/layout_view_test.exs', /AppName/],
      ['test/views/page_view_test.exs', /AppName/],
      ['web/channels/user_socket.ex', moduleRegex],
      ['web/controllers/page_controller.ex', moduleRegex],
      ['web/views/error_helpers.ex', moduleRegex],
      ['web/views/error_view.ex', moduleRegex],
      ['web/views/page_view.ex', moduleRegex],
      ['web/gettext.ex', moduleRegex],
      ['web/router.ex', moduleRegex],
      ['web/web.ex', moduleRegex],
      ['package.json', /react/]
    ]);
  });
});
