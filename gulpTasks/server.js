/**
 * Created by crist on 29/04/2017.
 */
const gulp = require("gulp");
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

gulp.task("server", ["watch"], () => {
  gulp.src('public').pipe(webserver({
    livereload: true,
    port: 4000,
    open: true
  }))
});

gulp.task("watch", () => {
  watch('app/**/*.html', () => gulp.start('app.html'));
  watch('app/**/*.css', () => gulp.start('app.css'));
  watch('app/**/*.js', () => gulp.start('app.js'));
  watch('assets/**/*.*', () => gulp.start('app.assets'));
});