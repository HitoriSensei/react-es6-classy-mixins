var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build-index', function() {
  return gulp
    .src("react-es6-mixins.js")

    .pipe(babel({
      presets: [
        "es2015"
      ],
      plugins: [
        "transform-es2015-modules-commonjs"
      ]
    }))
    .pipe(rename("index.js"))
    .pipe(gulp.dest("."))
});


gulp.task('build-dist', function() {
  return gulp
    .src("react-es6-mixins.js")

    .pipe(babel({
      presets: [
        "es2015"
      ],
      plugins: [
        "transform-es2015-modules-umd"
      ]
    }))

    .pipe(rename("react-es6-mixins.js"))
    .pipe(gulp.dest("dist"))

    .pipe(uglify({
      preserveComments: false
    }))

    .pipe(rename("react-es6-mixins.min.js"))
    .pipe(gulp.dest("dist"))
});

gulp.task('build',['build-index', 'build-dist'])