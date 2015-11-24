var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
  return gulp
    .src("index.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [
        "es2015"
      ],
      plugins: [
        "transform-es2015-modules-umd"
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(rename("react-es6-mixins.js"))
    .pipe(gulp.dest("dist"))
    .pipe(uglify({
      preserveComments: false
    }))
    .pipe(rename("react-es6-mixins.min.js"))
    .pipe(gulp.dest("dist"))
});