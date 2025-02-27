import js from '@eslint/js';
import nextPlugin from 'eslint-config-next';

export default [
  js.configs.recommended,
  ...nextPlugin,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'public/**'],
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off'
    }
  }
]; 