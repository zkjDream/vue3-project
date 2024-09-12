import { Linter } from 'eslint';
import vueParser from 'vue-eslint-parser';
// import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
// import eslintRecommended from 'eslint/conf/eslint-recommended';
// import vueRecommended from 'eslint-plugin-vue/lib/configs/vue3-recommended';
// import tsRecommended from '@typescript-eslint/eslint-plugin/dist/configs/recommended';
// import prettierRecommended from 'eslint-config-prettier';


  /** @type {Linter.Config} */
  export default [
    {
      files: [
          "**/*.ts",
          "**/*.cts",
          "**.*.mts"
      ],
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
            ...globals.browser,
            ...globals.node,
            myCustomGlobal: "readonly"
        }
    }, 
    // extends: [
    //   "eslint:recommended", //继承 ESLint 内置的推荐规则
    //   "plugin:vue/vue3-recommended", // 继承 Vue.js 3 的推荐规则
    //   "plugin:@typescript-eslint/recommended", //继承 TypeScript ESLint 插件的推荐规则
    //   "plugin:prettier/recommended", //继承 Prettier 的推荐规则
    //   "eslint-config-prettier", //关闭 ESLint 中与 Prettier 冲突的规则
    //   'prettier',
    // ],

    // parserOptions: {
    //   ecmaVersion: "latest",
    //   parser: "@typescript-eslint/parser",
    //   sourceType: "module",
    //   ecmaFeatures: {
    //     jsx: true,
    //   },
    // },
    // ignorePatterns: ["dist", "node_modules", ".eslint.config.js", "commitlint.config.cjs"],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'vue': vuePlugin,
      'prettier': prettierPlugin,
    },
    rules: {
      "vue/multi-word-component-names": "off", // 禁用vue文件强制多个单词命名
      "@typescript-eslint/no-explicit-any": "off", //允许使用any
      "@typescript-eslint/no-this-alias": [
        "error",
        {
          allowedNames: ["that"], // this可用的局部变量名称
        },
      ],
      "@typescript-eslint/ban-ts-comment": "off", //允许使用@ts-ignore
      "@typescript-eslint/no-non-null-assertion": "off", //允许使用非空断言
      "no-console": [
        //提交时不允许有console.log
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-debugger": "warn", //提交时不允许有debugger
    },
    // overrides: [
    //     {
    //       files: ['src/**/*.{js,ts,vue}'],
    //       // 其他配置
    //     },
    //   ],
      ignores: ["dist", "node_modules", ".eslint.config.js", "commitlint.config.cjs"]
  },
  {
    files: ['src/**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser,
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      'vue': vuePlugin,
      '@typescript-eslint': tsPlugin,
      'prettier': prettierPlugin,
    },
    // rules: {
    //   ...vueRecommended.rules,
    //   ...tsRecommended.rules,
    //   ...prettierRecommended.rules,
    // },
  },];
  