import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import { eslint } from 'rollup-plugin-eslint';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
const url = require('postcss-url');

const { BUILD } = process.env;
const extensions = ['.js', '.jsx'];
const isDevelopment = BUILD === 'development';
const isProduction = BUILD === 'production';

export default {
  input: path.resolve(__dirname, 'src/script.js'),
  output: {
    dir: path.resolve(__dirname, isDevelopment
      ? 'build'
      : 'public'
    ),
    entryFileNames: isDevelopment
      ? 'js/[name].js'
      : 'js/[name].min.js',
    format: "iife",
    sourcemap: isProduction
  },
  context: 'this', // danger zone
  plugins: [
    image(),
    svgr(),
    isProduction && terser(),
    postcss({
      extensions: ['.css', '.scss'],
      minimize: isProduction,
      sourceMap: isProduction,
      plugins: [
        autoprefixer,
        url({
          url: 'inline',
          maxSize: 10,
          fallback: 'rebase',
          basePath: path.resolve(__dirname, 'src/assets/images')
        })
      ],
      extract: path.relative(__dirname, isDevelopment
        ? 'css/style.css'
        : 'css/style.min.css'
      )
    }),
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(BUILD),
      preventAssignment: true
    }),
    babel({
      presets: ['@babel/preset-react'],
      exclude: /node_modules/,
      babelHelpers: 'bundled'
    }),
    commonjs(),
    isDevelopment && copy({
      targets: [
        { src: 'src/index.html', dest: 'build' },
        { src: 'src/assets/images', dest: 'build' }
      ]
    }),
    isProduction && copy({
      targets: [
        { src: 'src/assets/images', dest: 'public' }
      ]
    }),
    isDevelopment && eslint(),
    isDevelopment && serve({
      open: false,
      verbose: true,
      contentBase: ['', 'build'],
      port: 3000
    }),
    isDevelopment && livereload({ watch: 'src' })
  ]
};