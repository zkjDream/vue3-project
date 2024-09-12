# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


# 安装的vue生态
1.vue-router
2.pinia 数据持久化插件 pinia-plugin-persistedstate
3.scss
4.elelemt-plus @element-puls/icons-vue
5.unplugin-vue-components unplugin-auto-import 按需引入的插件
6.生成.gz文件
7.网络请求axios的配置



# 一些其他的辅助编程的配置，以及一些其他辅助的配置 

1.配置.eslintrc.cjs
2.配置.prettierrc
3.配置.prettierigore
4.配置husky
5.lint-staged
6.@commitlint/cli


# 安装方式
> pnpm install  || yarn || npm install 
# 启动方式
> pnpm run dev || yarn dev || npm run dev

# 关于vite 与 webpack使用的区别
### 静态资源的处理
> webpack：使用require处理
> 使用new URL(url, import.meta.url).href处理， import.meta.url包含了对目前ES模块的绝对路径
> new  URL(url [, base]) 构造函数返回一个新创建的 URL 对象，如果url 是相对 URL，则会将 base 用作基准 URL。如果 url 是绝对 URL，则无论参数base是否存在，都将被忽略

### 组件自动化注册
> webpack 
``` javascript
<script>
const path = require('path');
//读取@/components/BaseEchartsModel下所有.vue文件
const files = require.context('@/components/BaseEchartsModel', false, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, '.vue');
  modules[name] = files(key).default || files(key);
});
export default {
  name: 'BaseEcharts',
  components: modules,
};
</script>
```
> vite 
``` javascript 
<script setup lang="ts">
//读取@/components/BaseEchartsModel下所有.vue文件
import.meta.glob('@/components/BaseEchartsModel/*.vue');
</script>
```
