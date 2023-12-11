import {type Options} from 'tsup';

const config: Options = {
  dts: true,
  entry: ['./src/index.ts', './src/countries/index.ts', './src/states/index.ts', './src/helpers/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  target: 'node16',
  tsconfig: 'tsconfig.build.json',
};

export default config;
