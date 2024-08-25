/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

export default {
  printWidth: 120,
  jsxBracketSameLine: false,
  tabWidth: 2,
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro', "eslint-config-prettier"],
};
