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
    this.atomName = _.snakeCase(this.appname);
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('generator-phoenix-react') + ' generator!'
    ));
  },

  writing: function () {
    this.directory(
      this.templatePath('app'),
      this.destinationPath()
    );

    var files = ['lib/reactapp/endpoint.ex', 'lib/reactapp.ex'];
    _.forEach(files, function (file) {
      var destination = file.replace('reactapp', this.atomName);
      this.copy(
        this.templatePath(file),
        this.destinationPath(destination)
      );
    }.bind(this));
  },
  install: function () {
    this.installDependencies({
      bower: false,
      npm: true
    });
  },
  end: function () {
    this.log(yosay(
      'I am all done! You can start the server with ' + chalk.yellow('npm start')
    ));
  }
});
