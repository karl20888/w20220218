import{_ as e,c as i,o as a,a as r}from"./app.1fbaa3e7.js";var l="/w20220218/assets/12.e9ca3c87.png";const g='{"title":"\u6027\u80FD\u63D0\u5347","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5386\u7A0B","slug":"\u5386\u7A0B"},{"level":2,"title":"\u503C\u5F97\u6CE8\u610F\u7684\u65B0\u7279\u6027","slug":"\u503C\u5F97\u6CE8\u610F\u7684\u65B0\u7279\u6027"},{"level":2,"title":"\u6CE8\u610F\uFF1A","slug":"\u6CE8\u610F\uFF1A"},{"level":2,"title":"\u4F18\u52BF","slug":"\u4F18\u52BF"},{"level":3,"title":"\u6027\u80FD\u63D0\u5347","slug":"\u6027\u80FD\u63D0\u5347"},{"level":3,"title":"Composition API \u4E0E Options API","slug":"composition-api-\u4E0E-options-api"},{"level":3,"title":"Proxy \u4E0E Object.defineProperty","slug":"proxy-\u4E0E-object-defineproperty"},{"level":3,"title":"\u7F16\u8BD1","slug":"\u7F16\u8BD1"},{"level":2,"title":"Element Plus","slug":"element-plus"},{"level":3,"title":"\u65B0\u7EC4\u4EF6","slug":"\u65B0\u7EC4\u4EF6"}],"relativePath":"vue3/index.md","lastUpdated":1645149432383}',t={},o=r('<h1 id="vue-3" tabindex="-1">Vue 3 <a class="header-anchor" href="#vue-3" aria-hidden="true">#</a></h1><h2 id="\u5386\u7A0B" tabindex="-1">\u5386\u7A0B <a class="header-anchor" href="#\u5386\u7A0B" aria-hidden="true">#</a></h2><ul><li>2013\u5E7412\u6708\u5F00\u59CB</li><li>2015\u5E749\u6708 1.0 \u9884\u89C8\u7248\u53D1\u5E03</li><li>2016\u5E746\u6708 2.0 \u9884\u89C8\u7248\u53D1\u5E03</li><li>2021\u5E746\u6708 2.6.14 \u6700\u65B0\u7248\u672C</li><li>2020\u5E741\u6708 3.0 \u9884\u89C8\u7248</li><li>2020\u5E749\u670818\u65E5 3.0 \u6B63\u5F0F\u7248</li><li>2021\u5E746\u67088\u65E5 3.1 \u6B63\u5F0F\u7248</li><li>2021\u5E748\u670810\u65E5 3.2 \u6B63\u5F0F\u7248</li><li>2021\u5E7412\u670812\u65E5 3.2.26 \u6700\u65B0\u7248</li></ul><h2 id="\u503C\u5F97\u6CE8\u610F\u7684\u65B0\u7279\u6027" tabindex="-1">\u503C\u5F97\u6CE8\u610F\u7684\u65B0\u7279\u6027 <a class="header-anchor" href="#\u503C\u5F97\u6CE8\u610F\u7684\u65B0\u7279\u6027" aria-hidden="true">#</a></h2><p>Vue 3 \u4E2D\u4E00\u4E9B\u9700\u8981\u5173\u6CE8\u7684\u65B0\u529F\u80FD\u5305\u62EC\uFF1A</p><ul><li><a href="./composition-api.html">\u7EC4\u5408\u5F0F API</a></li><li><a href="https://v3.cn.vuejs.org/guide/teleport.html" target="_blank" rel="noopener noreferrer">Teleport</a></li><li><a href="https://v3.cn.vuejs.org/guide/migration/fragments.html" target="_blank" rel="noopener noreferrer">\u7247\u6BB5</a></li><li><a href="https://v3.cn.vuejs.org/guide/component-custom-events.html" target="_blank" rel="noopener noreferrer">\u89E6\u53D1\u7EC4\u4EF6\u9009\u9879</a></li><li><a href="https://github.com/vuejs/vue-next/tree/master/packages/runtime-core" target="_blank" rel="noopener noreferrer">\u6765\u81EA <code>@vue/runtime-core</code> \u7684 <code>createRenderer</code> API</a>\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668</li><li><a href="https://v3.cn.vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noopener noreferrer">\u5355\u6587\u4EF6\u7EC4\u4EF6\u7EC4\u5408\u5F0F API \u8BED\u6CD5\u7CD6\uFF08<code>&lt;script setup&gt;</code>\uFF09</a></li><li><a href="https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css" target="_blank" rel="noopener noreferrer">\u5355\u6587\u4EF6\u7EC4\u4EF6\u72B6\u6001\u9A71\u52A8\u7684 CSS \u53D8\u91CF\uFF08<code>&lt;style&gt;</code> \u4E2D\u7684 <code>v-bind</code>\uFF09</a></li><li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md" target="_blank" rel="noopener noreferrer">SFC <code>&lt;style scoped&gt;</code> \u73B0\u5728\u53EF\u4EE5\u5305\u542B\u5168\u5C40\u89C4\u5219\u6216\u53EA\u9488\u5BF9\u63D2\u69FD\u5185\u5BB9\u7684\u89C4\u5219</a></li><li><a href="https://v3.cn.vuejs.org/guide/migration/suspense.html" target="_blank" rel="noopener noreferrer">Suspense</a></li></ul><h2 id="\u6CE8\u610F\uFF1A" tabindex="-1">\u6CE8\u610F\uFF1A <a class="header-anchor" href="#\u6CE8\u610F\uFF1A" aria-hidden="true">#</a></h2><p>Vue3 \u5C06\u4E0D\u518D\u517C\u5BB9\u4EFB\u4F55 IE \u7248\u672C\uFF01</p><h2 id="\u4F18\u52BF" tabindex="-1">\u4F18\u52BF <a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a></h2><h3 id="\u6027\u80FD\u63D0\u5347" tabindex="-1">\u6027\u80FD\u63D0\u5347 <a class="header-anchor" href="#\u6027\u80FD\u63D0\u5347" aria-hidden="true">#</a></h3><h4 id="\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u63D0\u5347" tabindex="-1">\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u63D0\u5347 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u63D0\u5347" aria-hidden="true">#</a></h4><p>Vue 3 \u4F7F\u7528 Proxy \u5BF9\u8C61\u91CD\u5199\u54CD\u5E94\u5F0F\u3002\u4E0D\u9700\u8981\u521D\u59CB\u5316\u7684\u65F6\u5019\u904D\u5386\u6240\u6709\u5C5E\u6027\uFF0C\u53E6\u5916\u6709\u591A\u5C42\u5C5E\u6027\u5D4C\u5957\u7684\u8BDD\uFF0C\u53EA\u6709\u8BBF\u95EE\u67D0\u4E2A\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u9012\u5F52\u5904\u7406\u4E0B\u4E00\u7EA7\u5C5E\u6027\u3002</p><ul><li>\u53EF\u4EE5\u76D1\u542C\u52A8\u6001\u65B0\u589E\u7684\u5C5E\u6027</li><li>\u53EF\u4EE5\u76D1\u542C\u5220\u9664\u7684\u5C5E\u6027</li><li>\u53EF\u4EE5\u76D1\u542C\u6570\u7EC4\u7684\u7D22\u5F15\u548C length \u5C5E\u6027</li></ul><h4 id="\u7F16\u8BD1\u4F18\u5316" tabindex="-1">\u7F16\u8BD1\u4F18\u5316 <a class="header-anchor" href="#\u7F16\u8BD1\u4F18\u5316" aria-hidden="true">#</a></h4><ul><li><p>\u4F18\u5316\u7F16\u8BD1\u548C\u91CD\u5199\u865A\u62DF DOM\uFF0C\u8BA9\u9996\u6B21\u6E32\u67D3\u548C\u66F4\u65B0 DOM \u6027\u80FD\u6709\u66F4\u5927\u7684\u63D0\u5347\uFF0CVue 3 \u6807\u8BB0\u548C\u63D0\u5347\u6240\u6709\u9759\u6001\u6839\u8282\u70B9\uFF0Cdiff \u7684\u65F6\u5019\u53EA\u6BD4\u8F83\u52A8\u6001\u8282\u70B9\u5185\u5BB9\u3002</p></li><li><p>\u7247\u6BB5\uFF0C\u6A21\u677F\u91CC\u9762\u4E0D\u7528\u521B\u5EFA\u552F\u4E00\u6839\u8282\u70B9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u653E\u540C\u7EA7\u6807\u7B7E\u548C\u6587\u672C\u5185\u5BB9\u3002</p></li><li><p>\u9759\u6001\u6807\u8BB0\uFF0C\u8DF3\u8FC7\u9759\u6001\u8282\u70B9\uFF0C\u76F4\u63A5\u5BF9\u6BD4\u52A8\u6001\u8282\u70B9\uFF0C\u7F13\u5B58\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</p></li></ul><h4 id="\u6E90\u7801\u4F53\u79EF\u4F18\u5316" tabindex="-1">\u6E90\u7801\u4F53\u79EF\u4F18\u5316 <a class="header-anchor" href="#\u6E90\u7801\u4F53\u79EF\u4F18\u5316" aria-hidden="true">#</a></h4><h3 id="composition-api-\u4E0E-options-api" tabindex="-1">Composition API \u4E0E Options API <a class="header-anchor" href="#composition-api-\u4E0E-options-api" aria-hidden="true">#</a></h3><h4 id="options-api" tabindex="-1">Options API <a class="header-anchor" href="#options-api" aria-hidden="true">#</a></h4><ul><li>\u5305\u542B\u4E00\u4E2A\u63CF\u8FF0\u7EC4\u4EF6\u9009\u9879\uFF08data\u3001methods\u3001props \u7B49\uFF09\u7684\u5BF9\u8C61 options\u3002</li><li>API \u5F00\u53D1\u590D\u6742\u7EC4\u4EF6\uFF0C\u540C\u4E00\u4E2A\u529F\u80FD\u903B\u8F91\u7684\u4EE3\u7801\u88AB\u62C6\u5206\u5230\u4E0D\u540C\u9009\u9879\u3002</li><li>\u4F7F\u7528 mixin \u91CD\u7528\u516C\u7528\u4EE3\u7801\uFF0C\u9700\u7EF4\u62A4\u547D\u540D\u51B2\u7A81\uFF0C\u6570\u636E\u6765\u6E90\u4E0D\u6E05\u6670\u3002</li></ul><h4 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h4><ul><li>\u57FA\u4E8E\u51FD\u6570\u7684 API\uFF0C\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u7EC4\u7EC7\u7EC4\u4EF6\u7684\u903B\u8F91\u3002</li><li>\u89E3\u51B3 Options API \u5728\u5927\u578B\u9879\u76EE\u4E2D\u4E0D\u597D\u62C6\u5206\u548C\u91CD\u7528\u7684\u95EE\u9898\u3002</li></ul><h3 id="proxy-\u4E0E-object-defineproperty" tabindex="-1">Proxy \u4E0E Object.defineProperty <a class="header-anchor" href="#proxy-\u4E0E-object-defineproperty" aria-hidden="true">#</a></h3><ul><li>Proxy \u6027\u80FD\u66F4\u597D\uFF0C\u5E76\u4E14\u672A\u6765\u4F5C\u4E3A\u65B0\u529F\u80FD\u6301\u7EED\u4EA4\u7ED9\u6D4F\u89C8\u5668\u53BB\u4E0D\u65AD\u4F18\u5316\u3002</li><li>Proxy \u53EF\u4EE5\u62E6\u622A\u5C5E\u6027\u7684\u8BBF\u95EE\u3001\u8D4B\u503C\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u3002</li><li>\u53EF\u4EE5\u52AB\u6301\u7684\u64CD\u4F5C\u6709 13 \u79CD\u3002</li></ul><p><img src="'+l+'" alt="13"></p><h3 id="\u7F16\u8BD1" tabindex="-1">\u7F16\u8BD1 <a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a></h3><p>Vue 3 \u6807\u8BB0\u548C\u63D0\u5347\u6240\u6709\u7684\u9759\u6001\u8282\u70B9\uFF0Cdiff \u7B97\u6CD5\u53EA\u9700\u8981\u5BF9\u6BD4\u52A8\u6001\u8282\u70B9\u5185\u5BB9\u3002</p><h2 id="element-plus" tabindex="-1">Element Plus <a class="header-anchor" href="#element-plus" aria-hidden="true">#</a></h2><blockquote><p>\u4E00\u5957\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u51C6\u5907\u7684\u57FA\u4E8E Vue 3 \u7684\u684C\u9762\u7AEF\u7EC4\u4EF6\u5E93\u3002</p></blockquote><p>\u968F\u7740 Vue 3 \u7684\u53D1\u5E03\uFF0CElement UI \u4E5F\u5728\u540C\u5E74\u5F00\u59CB\u8FDB\u884C\u5347\u7EA7\u91CD\u6784\uFF0C\u65B0\u9879\u76EE\u5B9A\u540D\u4E3A Element Plus\uFF0C\u5E76\u5728 2020 \u5E74\u5E74\u5E95\u53D1\u5E03\u4E86\u7B2C\u4E00\u4E2A\u9884\u89C8\u7248\uFF0C\u7ECF\u5386\u4E86\u4E00\u6574\u5E74\u8FD1\u767E\u4E2A\u7248\u672C\u540E\uFF0C\u76EE\u524D\u5DF2\u7ECF\u53D1\u5E03\u5230 1.2.0-beta.6 \u7248\uFF0C\u4F46\u59CB\u7EC8\u6CA1\u6709\u771F\u6B63\u7684 release \u7248\u3002\u4E0D\u8FC7\u76F8\u4FE1 Element \u56E2\u961F\u5F00\u53D1\u51FA\u7684\u4EA7\u54C1\u7684\u7A33\u5B9A\u6027\u7981\u5F97\u4F4F\u8003\u9A8C\u3002</p><h3 id="\u65B0\u7EC4\u4EF6" tabindex="-1">\u65B0\u7EC4\u4EF6 <a class="header-anchor" href="#\u65B0\u7EC4\u4EF6" aria-hidden="true">#</a></h3><ul><li>Scrollbar \u6EDA\u52A8\u6761</li><li>Space \u95F4\u8DDD</li><li>Affix \u56FA\u9489</li></ul><p><strong>\u91CD\u70B9\uFF1A</strong></p><ul><li>Select V2 \u865A\u62DF\u5217\u8868\u9009\u62E9\u5668\uFF08beta\uFF09</li><li>Tree V2 \u865A\u62DF\u5316\u6811\u5F62\u63A7\u4EF6\uFF08beta\uFF09</li></ul>',33),n=[o];function s(h,d,p,c,u,f){return a(),i("div",null,n)}var b=e(t,[["render",s]]);export{g as __pageData,b as default};
