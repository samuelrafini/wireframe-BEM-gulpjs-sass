import { task, series } from 'gulp';
import sass from './gulp/sass';
import minJs from './gulp/minJs';
import minCss from './gulp/minCss';
import watchFile from './gulp/watchFile';

task('default', series('watch'));

