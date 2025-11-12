import eslintJs from "@eslint/js";
// import globals from "globals";
import eslintTs from "typescript-eslint";
import eslintVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import mergeConfig from "eslint-config-prettier"
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig(
  eslintJs.configs.recommended, // js 推荐配置
  eslintTs.configs.recommended, // ts 推荐配置
  [
    // 全局忽略规则
    {
      ignores: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/*.min.js'
      ]
    },
    // 使用vue的预设配置，纠正配置
    ...eslintVue.configs['flat/base'],
    // 引入vue 代码规范
    ...eslintVue.configs['flat/strongly-recommended']
  ],
  mergeConfig,
  // Prettier 配置 (必须放在最后)
  [{
    plugins: {
      prettier: prettierPlugin
    }
  }]
)
