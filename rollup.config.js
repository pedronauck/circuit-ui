// Plugins
import reactSvg from 'rollup-plugin-react-svg';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

// Shared config
const shared = {
  external: [
    'emotion',
    'emotion-theming',
    'polished',
    'react',
    'react-dom',
    'react-emotion',
    'react-modal',
    'prop-types',
    'recompose',
    'react',
    'facepaint'
  ],
  plugins: [
    resolve({
      module: true,
      modulesOnly: false
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    reactSvg({
      jsx: false
    }),
    replace({
      delimiters: ['__', '__'],
      values: {
        DEV: process.env.NODE_ENV === 'develop',
        STORYBOOK: false,
        PRODUCTION: process.env.NODE_ENV === 'production'
      }
    })
  ]
};

// Entry files
export default [
  {
    input: 'src/index.js',
    output: { file: 'dist/index.js', format: 'es' },
    ...shared
  },
  {
    input: 'src/util/index.js',
    output: { file: 'dist/util.js', format: 'es' },
    ...shared
  },
  {
    input: 'src/styles/index.js',
    output: { file: 'dist/styles.js', format: 'es' },
    ...shared
  },
  {
    input: 'src/themes/index.js',
    output: { file: 'dist/themes.js', format: 'es' },
    ...shared
  },
  {
    input: 'src/index.js',
    output: { file: 'dist/index.cjs.js', format: 'cjs' },
    ...shared
  },
  {
    input: 'src/util/index.js',
    output: { file: 'dist/util.cjs.js', format: 'cjs' },
    ...shared
  },
  {
    input: 'src/styles/index.js',
    output: { file: 'dist/styles.cjs.js', format: 'cjs' },
    ...shared
  },
  {
    input: 'src/themes/index.js',
    output: { file: 'dist/themes.cjs.js', format: 'cjs' },
    ...shared
  }
];
