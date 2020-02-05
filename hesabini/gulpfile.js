'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),    
    gcmq = require('gulp-group-css-media-queries'),    
    reload = browserSync.reload;

// scss
gulp.task('scss', function() {
  return gulp
    .src('./scss/app.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['> 1%'],
        grid: true
        //browsers: ['last 2 versions'],
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest('./style'))
    .pipe(reload({ stream: true }));
});

// cleanCSS
gulp.task('cleanCSS', function() {
  return gulp
    .src('./styles/app.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./style'));
});

// style
gulp.task('style', ['scss']);

//build
gulp.task('build', ['style']);

// prod
gulp.task('prod', function() {  
  runSequence('build', 'cleanCSS');
});

// default (watch)
gulp.task('default', ['build'], function() {
  browserSync({
    notify: false,
    port: 9000,
    logLevel: 'silent',
    server: {
      baseDir: ['./']
    }
  });

  gulp
    .watch(['./*.html', './style/**/*.css', './script/*.js'])
    .on('change', reload);
      
  gulp.watch('./scss/**/*.scss', ['style']);
  gulp.watch('./img/**/*.*', ['img']);  
  gulp.watch('./script/**/*.js', ['js']);    
});
