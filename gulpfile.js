const {src, dest, parallel} = require('gulp');
const sassImporter = require('node-sass-package-importer');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

/**
 * Lets merge application wide JS dependencies into one file
 *
 * @returns {*}
 */
dependencies = function () {
  return src(
    [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery/dist/jquery.min.map',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map'
    ]
  )
    .pipe(dest('web/js/dependencies'))
};

/**
 * Lets gather all application specific JS files and minify them
 *
 * @returns {*}
 */
js = function () {
  return src(['src/js/*.js', 'src/js/**/*.js'], {sourcemaps: true})
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('web/js', {sourcemaps: true}))
};

/**
 * Lets compile all application specific SCSS files into CSS
 *
 * @returns {*}
 */
css = function () {
  return src(['src/scss/screen.scss', 'src/scss/**/*.scss'])
    .pipe(sass({importer: sassImporter()}))
    .pipe(csso())
    .pipe(dest('web/css'))
};

exports.dependencies = dependencies;
exports.js = js;
exports.css = css;

exports.default = parallel(dependencies, js, css);
