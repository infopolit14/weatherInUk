var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var watchSass = require("gulp-watch-sass")

gulp.task('browser-reload',function () {
    browserSync.reload();
});

gulp.task('browser-sync', function () {
    console.log(serve, '333');
    gulp.watch("app/*.html").on('change', browserSync.reload);
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});
gulp.task('sass', function () {
    console.log(serve, '333');
    gulp.src('app/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/content/css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('app/templates/*/*.scss', ['sass', 'browser-reload']);
});

gulp.task('start', ['sass', 'browser-sync'], function () {
    gulp.watch('app/templates/*/*.scss', ['sass', 'browser-reload']);
    gulp.watch('app/**/*.js', ['browser-reload']);
});
