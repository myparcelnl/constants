import {defineConfig} from 'vite';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      enabled: false,
      thresholds: {
        '100': true,
      },
      all: true,
    },
  },
});
