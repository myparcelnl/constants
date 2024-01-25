import {type Options} from 'tsup';

const config: Options = {
  dts: true,
  entry: ['./src/index.ts', './src/countries/index.ts', './src/states/index.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  tsconfig: 'tsconfig.build.json',
};

export default config;
