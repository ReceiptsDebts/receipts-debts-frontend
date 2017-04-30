const gulp = require('gulp');
const fs = require('fs-extra');
const util = require('gulp-util');

gulp.task('default', () => {
  fs.walk('gulpTasks').on('data', (file) => {
    if ((/\.(js)$/i).test(file.path)) require(file.path);
  }).on('end', function () {
    gulp.start('build');
  })
});

gulp.task('build', () => {
  if (util.env.production) gulp.start('deps', 'app');
  else gulp.start('deps', 'app', 'server');
});