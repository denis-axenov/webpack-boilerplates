export default {
    extends: "stylelint-config-standard",
    ignoreFiles: [
        "src/fonts/*",
        "src/images/*",
        "src/scripts/**/*"
    ],
    overrides: [
        {
            files: [
                "src/styles/**/*.scss"
            ],
            customSyntax: "postcss-scss",
            rules: {
                "annotation-no-unknown": [
                    true,
                    {
                        "ignoreAnnotations": [
                            "default"
                        ]
                    }
                ],
                "at-rule-no-unknown": [
                    true,
                    {
                        "ignoreAtRules": [
                            "mixin",
                            "use",
                            "include",
                            "function",
                            "for",
                            "each",
                            "if",
                            "else",
                            "while",
                            "return",
                            "at-root",
                            "extend",
                            "error",
                            "warn",
                            "debug",
                            "forward"
                        ]
                    }
                ],
                "declaration-no-important": true,
                "function-no-unknown": null,
                "no-invalid-position-at-import-rule": [
                    true,
                    {
                        "ignoreAtRules": [
                            "use",
                            "forward"
                        ]
                    }
                ]
            }
        },
        {
            files: [
                "src/templates/**/*.html"
            ],
            customSyntax: "postcss-html"
        }
    ]
};