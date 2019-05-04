import { src, dest } from 'gulp';

export default () => src('package.json').pipe(dest('output'));
