import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import multiEntry from "rollup-plugin-multi-entry";
import includePaths from 'rollup-plugin-includepaths';
import { terser } from "rollup-plugin-terser";

import pkg from './package.json';

/* For resolving from base paths */
const includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions: ['.js']
};

export default [
  {
    input: "src/_*.js",
    output: [{
        file: 'cjs/' + pkg.main.replace(/\.js$/, `.min.js`),
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      includePaths(includePathOptions),
      multiEntry(),
      resolve(), // so Rollup can find imported library
      commonjs(), // so Rollup can convert `imported library to an ES module
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      terser({
        sourcemap: true
      })
    ],
    treeshake: {
      propertyReadSideEffects: false,
    },
    external: [
      ...Object.keys(pkg.peerDependencies || {})
    ] // libraries used which are not to be imported with the bundle
  }
];
