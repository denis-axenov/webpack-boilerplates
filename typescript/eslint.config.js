import eslint from "@eslint/js";
import globals from "globals";
import tsEslint from "typescript-eslint";
import pluginJest from "eslint-plugin-jest";


export default [
    {
        ignores: [
            "dist/*",
            "node_modules/*"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser
            }
        },
        rules: {
            ...eslint.configs.recommended.rules,
            "semi": "error"
        }
    },
    {
        plugins: {
            '@typescript-eslint': tsEslint.plugin,
        },
        files: [
            'src/scripts/**/*.ts'
        ],
        languageOptions: {
            parser: tsEslint.parser,
            globals: {
                ...globals.browser
            }
        },
        rules: {
            ...tsEslint.configs.recommended[1].rules,
            ...tsEslint.configs.recommended[2].rules
        }
    },
    {
        plugins: {
            "jest": pluginJest
        },
        files: [
            "__tests__/**/*.js"
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest
            }
        },
        rules: {
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error',
        }
    },
    {
        files: [
            "*.config.js"
        ],
        languageOptions: {
            globals: globals.node
        }
    }
];