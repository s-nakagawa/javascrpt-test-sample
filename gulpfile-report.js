'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');

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
      browsers: ['PhantomJS'],
      preprocessors: {
        'src/**/*.js': ['coverage']
      },
      reporters: ['progress', 'html', 'coverage'],
      htmlReporter: {
        outputDir: 'test-dist', // where to put the reports  
        focusOnFailures: true, // reports show failures on start 
        reportName: 'test-result', // report summary filename; browser info by default 
      },
      coverageReporter: {
        type: 'html',
        dir: 'test-dist/'
      }
    }));
});
gulp.task('clean:test', function (cb) {
    rimraf('./test-dist', cb);
});
///////////
// Build //
///////////
gulp.task('build', ['clean:test', 'test'], function () {
});
gulp.task('default', ['build']);
