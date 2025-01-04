import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      parser: tsParser, // ✅ Use TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // ✅ Ensure TypeScript understands the project setup
      },
      globals: globals.browser,
    },
  },
  {
    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    ignores: ['.node_modules/*', 'dist'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
