import antfu from "@antfu/eslint-config";
import format from "eslint-plugin-format";
import markdownlint from "eslint-plugin-markdownlint";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

const eslintConfig = antfu(
    {
        formatters: true,
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
        },
        rules: {
            "eqeqeq": "off",
            "curly": "error",
            "indent": ["error", 4, { SwitchCase: 1 }],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "comma-dangle": ["error", "always-multiline"],
            "prefer-const": "error",
            "no-console": "warn",
            "no-unused-vars": "off",
            "no-prototype-builtins": "off",
            "import/first": "off",
            "import/order": "off",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
            "vue/no-export-in-script-setup": "off",
            "vue/multi-word-component-names": "off",
            "vue/require-default-prop": "off",
            "vue/html-indent": ["error", 4],
            "vue/attributes-order": ["error", {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    "UNIQUE",
                    "SLOT",
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "ATTR_DYNAMIC",
                    "ATTR_STATIC",
                    "ATTR_SHORTHAND_BOOL",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: true,
            }],
            "vue/max-attributes-per-line": ["error", {
                singleline: 3,
                multiline: 1,
            }],
            "ts/no-this-alias": "off",
            "ts/no-empty-function": "off",
            "ts/no-explicit-any": "off",
            "ts/no-empty-interface": "off",
            "ts/explicit-module-boundary-types": "off",
            "ts/no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: true }],
            "ts/consistent-type-definitions": "off",
            "style/max-statements-per-line": ["error", { max: 3 }],
        },
        ignores: ["*.yaml", "**/*.md"],
    },
    {
        files: ["**/*.spec.ts"],
        rules: {
            "test/prefer-lowercase-title": ["error", {
                ignore: ["describe"],
            }],
            "test/consistent-test-it": "off",
        },
    },
    // {
    //     files: ["**/*.md"],
    //     languageOptions: {
    //         parser: format.parserPlain,
    //     },
    //     plugins: {
    //         format,
    //         markdownlint,
    //     },
    //     rules: { // see: https://github.com/DavidAnson/markdownlint/tree/main?tab=readme-ov-file#rules--aliases
    //         ...markdownlint.configs.recommended.rules,
    //         "markdownlint/md013": "off",
    //         "markdownlint/md033": "off",
    //         "markdownlint/md041": "off",
    //     },
    // },
);

export default withNuxt(eslintConfig, {
    ignores: ["**/*.md"],
});
