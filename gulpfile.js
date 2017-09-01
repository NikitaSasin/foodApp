'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cssnano = require('gulp-cssnano');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/main.js',
    style: 'src/style/main.styl',
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.styl',
  },
  clean: './build'
};

var config = {
  server: {
    baseDir: './build'
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: 'nsasin'
};

gulp.task('webserver', function() {
  browserSync(config);
});

gulp.task('clean', function(cb) {
  rimraf(path.clean, cb);
});

gulp.task('html:build', function() {
  gulp.src(path.src.html)
  .pipe(rigger())
  .pipe(gulp.dest(path.build.html))
  .pipe(reload({
    stream: true
  }));
});

gulp.task('js:build', function() {
  gulp.src(path.src.js)
  .pipe(rigger())
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path.build.js))
  .pipe(reload({
    stream: true
  }));
});

gulp.task('style:build', function() {
  gulp.src(path.src.style)
  .pipe(sourcemaps.init())
  .pipe(stylus())
  .pipe(cssnano())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path.build.css))
  .pipe(reload({
    stream: true
  }));
});

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  ]);

gulp.task('watch', function() {
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
});

gulp.task('default', ['build', 'webserver', 'watch']);
