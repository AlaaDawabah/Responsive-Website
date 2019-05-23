'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('boot', function () {
  return gulp.src('./style/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./style'));
});

gulp.task("boot:watch",function(){
    gulp.watch('./style/style.scss',gulp.series("boot"))
})