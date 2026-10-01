import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      enabled: false,
      thresholds: {
        '100': true,
      },
    },
  },
});
