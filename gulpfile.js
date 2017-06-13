var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('src/assets/style/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('src/assets/style'))
})

gulp.task('copy', function(){
  gulp.src('src/**/*')
  .pipe(gulp.dest('dist/'))
})