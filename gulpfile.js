"use strict";
/* require plugins */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    inlineCss = require('gulp-inline-css'),
    htmlMin = require('gulp-htmlmin');

/* tell BrowserSync to watch the dist directory */
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
})

/* compile .scss files to css */
gulp.task('sass', function() {
  gulp.src('src/_sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'));
});

/* inline the compiled css in index.html */
gulp.task('inlineCss', ['sass'], function() {
  gulp.src('src/index.html')
      .pipe(inlineCss())
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.reload({
        stream: true
      }));
})

/* watch the source files and build out the final email */
gulp.task('watch', ['browserSync', 'inlineCss'], function() {
  gulp.watch('src/**/*', ['inlineCss']);
})
