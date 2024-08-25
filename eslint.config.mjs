import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
  eslintConfigPrettier,
];
