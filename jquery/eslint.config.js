import eslint from "@eslint/js";
import globals from "globals";
import pluginJest from "eslint-plugin-jest";


export default [
    {
        ignores: [
            "dist/*",
            "node_modules/*"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            ...eslint.configs.recommended.rules,
            "semi": "error"
        }
    },
    {
        files: [
            "src/scripts/**/*.js"
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jquery
            }
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
                ...globals.node,
                ...globals.browser,
                ...globals.jest,
                ...globals.jquery
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