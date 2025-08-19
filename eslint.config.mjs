import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Basic JavaScript linting for all JS files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    extends: [eslintJs.configs.recommended],
  },

  // TypeScript linting for TS files in src directory (with type checking)
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs['recommended-type-checked'],
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // TypeScript linting for config files (without type checking)
  {
    files: ['*.ts', '*.tsx', 'scripts/**/*.ts', 'example/**/*.ts', 'example/**/*.tsx'],
    extends: [eslintJs.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Don't use project service for config files to avoid the error
        projectService: false,
      },
    },
  }
);
