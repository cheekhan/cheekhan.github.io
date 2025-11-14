import eslintJs from "@eslint/js";
import globals from "globals";
import eslintTs from "typescript-eslint";
import eslintVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import mergeConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig(
  {
    // 全局忽略规则
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/*.min.js",
      "**/*.d.ts",
    ],
  },
  {
    extends: [
      eslintJs.configs.recommended,
      ...eslintTs.configs.recommended,
      ...eslintVue.configs["flat/strongly-recommended"],
    ],
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: eslintTs.parser,
      },
    },
  },
  mergeConfig,
  [
    {
      plugins: {
        prettier: prettierPlugin,
      },
    },
  ],
);
