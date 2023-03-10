module.exports = {
  root: true,
  extends: [
    '@myparcel-eslint/eslint-config-esnext',
    '@myparcel-eslint/eslint-config-node',
  ],
  overrides: [
    {
      files: [
        './**/*.ts',
      ],
      extends: [
        '@myparcel-eslint/eslint-config-prettier-typescript',
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
