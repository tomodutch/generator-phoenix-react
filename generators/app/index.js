'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('appname', {type: String, required: true});
    this.moduleName = _.capitalize(_.camelCase(this.appname));
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('generator-phoenix-react') + ' generator!'
    ));
  },

  writing: function () {
    var directories = [
      'test',
      'web',
      'config'
    ];

    _.forEach(directories, function (dir) {
      this.directory(
        this.templatePath(dir),
        this.destinationPath(dir)
      );
    }.bind(this));

    var files = [
      'README.md',
      'mix.exs'
    ];

    _.forEach(files, function (file) {
      this.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }.bind(this));

    this.copy(
      this.templatePath('lib/reactapp/endpoint.ex'),
      this.destinationPath('lib/' + this.appname + '/endpoint.ex')
    );

    this.copy(
      this.templatePath('lib/reactapp/endpoint.ex'),
      this.destinationPath('lib/' + this.appname + '.ex')
    );

    this.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
