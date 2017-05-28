import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/renderer.js',
  format: 'cjs',
  plugins: [ json(), babel() ],
  dest: 'app/renderer.js'
};
