'use strict';
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');
var coveralls = require('gulp-coveralls');
var excludedFiles = [
  '!generators/app/templates/app/karma.conf.js',
  '!generators/app/templates/app/tests.bundle.js',
  '!generators/app/templates/app/webpack.config.js',
  '!generators/app/templates/app/test/static/js/components/app.spec.js',
  '!generators/app/templates/app/test/static/js/components/form.spec.js',
  '!generators/app/templates/app/test/static/js/helpers.js',
  '!generators/app/templates/app/web/static/js/app.js',
  '!generators/app/templates/app/web/static/js/components/app.js',
  '!generators/app/templates/app/web/static/js/components/form.js'
];

gulp.task('static', function () {
  var files = ['**/*.js'].concat(excludedFiles);
  return gulp.src(files)
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('pre-test', function () {
  var files = ['generators/**/*.js'].concat(excludedFiles);
  return gulp.src(files)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('coveralls', ['test'], function () {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static', 'test', 'coveralls']);
