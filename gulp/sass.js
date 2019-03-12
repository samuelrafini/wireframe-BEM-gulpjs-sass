import { src, dest, task, series } from 'gulp';
import sass from 'gulp-sass';
import del from 'del';

task('clean:styles', () => {
    return del([
      'styles/**/*',
    ]);
  });
  
  task('createCss', () => {
    return src('scss/**/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('styles/'));
  });
  
  export default task('sass', series('clean:styles', 'createCss'));
