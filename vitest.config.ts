import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      enabled: false,
      100: true,
      all: true,
    },
  },
});
