module.exports = {
  root: true,
  extends: [
    '@myparcel-dev/eslint-config-esnext',
    '@myparcel-dev/eslint-config-node',
  ],
  overrides: [
    {
      files: [
        './**/*.ts',
      ],
      extends: [
        '@myparcel-dev/eslint-config-prettier-typescript',
      ],
      rules: {
        'class-methods-use-this': 'off',
      },
    },
    {
      files: [
        './**/*.spec.*',
        './test/**/*',
      ],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        'max-lines-per-function': 'off',
        'max-len': 'off',
      },
    },
  ],
};
