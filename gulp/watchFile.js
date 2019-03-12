import { watch, task, series } from 'gulp';


export default task('watch', () => {
  watch('./scss/*.scss', series('sass', 'minCss'));
});

