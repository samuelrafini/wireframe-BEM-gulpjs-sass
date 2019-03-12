import { src, dest, task } from 'gulp';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';

export default task('minCss', () => {
    return src('styles/**/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('styles/'));
});

