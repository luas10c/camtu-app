import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'
import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['node_modules', 'android', 'ios', 'coverage', '.bundle']),
  ts.config(ts.configs.recommended, js.configs.recommended),
  {
    plugins: {
      prettier
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  }
])
