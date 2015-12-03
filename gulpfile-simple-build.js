'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
  scripts: ['src/**/*.js'],
  test: ['spec/**/*.js'],
  testRequire: [
  ],
  karma: 'karma.conf.js',
};

///////////
// Tasks //
///////////
gulp.task('test', function () {
  var testToFiles = paths.testRequire.concat(paths.scripts, paths.test);
  return gulp.src(testToFiles)
    .pipe($.karma({
      configFile: paths.karma,
      action: 'run',
      browsers: ['PhantomJS']
    }));
});
///////////
// Build //
///////////
gulp.task('build', ['test'], function () {
});
gulp.task('default', ['build']);
