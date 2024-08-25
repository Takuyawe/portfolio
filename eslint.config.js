import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";
import pluginAstro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": pluginTypescript,
      astro: pluginAstro,
    },
    rules: {
      ...pluginTypescript.configs.recommended.rules,
      ...pluginAstro.configs.recommended.rules,
    },
  },
  prettier,
];
