'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('modulename', {type: String, required: false});
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('generator-phoenix-react') + ' generator!'
    ));

    if (!this.modulename) {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'modulename',
        message: 'Your module name',
        default: this.appname
      }, function (answers) {
        this.modulename = answers.name;
        done();
      }.bind(this));
    }
  },

  writing: function () {
    this.moduleName = _.capitalize(_.camelCase(this.modulename));
    this.atomName = _.snakeCase(this.moduleName);

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
      'mix.exs',
      'package.json'
    ];

    _.forEach(files, function (file) {
      this.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }.bind(this));

    this.copy(
      this.templatePath('lib/reactapp/endpoint.ex'),
      this.destinationPath('lib/' + this.atomName + '/endpoint.ex')
    );

    this.copy(
      this.templatePath('lib/reactapp.ex'),
      this.destinationPath('lib/' + this.atomName + '.ex')
    );

    this.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.copy(
      this.templatePath('webpack.config.js.tpl'),
      this.destinationPath('webpack.config.js')
    );

    this.copy(
      this.templatePath('web/static/js/app.js.tpl'),
      this.destinationPath('web/static/js/app.js')
    );

    this.fs.delete(this.destinationPath('web/static/js/app.js.tpl'));
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
