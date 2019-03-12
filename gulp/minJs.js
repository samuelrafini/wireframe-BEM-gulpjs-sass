const { src, dest, task } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

export default task('minJs', () => {
  return src('js/**/*.js')
    // The gulp-uglify plugin won't update the filename
    .pipe(uglify())
    // So use gulp-rename to change the extension
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('js/'));
})
