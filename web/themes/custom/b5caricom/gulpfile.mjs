import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'sass'; // Dart Sass

// Create Sass compiler
const sassCompiler = gulpSass(sass);

const paths = {
  scss: {
    src: ['scss/**/*.scss', '!node_modules/**'],
    dest: 'dist/css'
  }
};

// Compile SCSS
export function compileSCSS() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scss.dest));
}

// Watch files
export function watchFiles() {
  gulp.watch(paths.scss.src, { usePolling: true, interval: 100 }, compileSCSS);
}

// Default task
export default gulp.series(compileSCSS, watchFiles);
