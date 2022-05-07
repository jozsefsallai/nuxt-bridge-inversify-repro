```
git clone git@github.com:jozsefsallai/nuxt-bridge-inversify-repro.git
cd nuxt-bridge-inversify-repro
npm install
npm run dev
```

Example error:

```
[nuxt] [request error] TYPES is not defined
  at _dec2 (./.nuxt/dist/server/server.js:8104:78)
  at Module../services/logging/LoggingService.ts (./.nuxt/dist/server/server.js:8105:179)
  at __webpack_require__ (./.nuxt/dist/server/server.js:21:30)
  at Module../services/inversify.ts (./.nuxt/dist/server/server.js:8071:81)
  at __webpack_require__ (./.nuxt/dist/server/server.js:21:30)
  at Module../node_modules/unplugin/dist/webpack/loaders/transform.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin-vue2-script-setup/node_modules/unplugin/dist/webpack/loaders/transform.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?!./pages/HomePage.vue?vue&type=script&lang=ts& (./.nuxt/dist/server/server.js:7239:77)
  at __webpack_require__ (./.nuxt/dist/server/server.js:21:30)
  at Module../pages/HomePage.vue?vue&type=script&lang=ts& (./.nuxt/dist/server/server.js:7959:499)
  at __webpack_require__ (./.nuxt/dist/server/server.js:21:30)
  at Module../pages/HomePage.vue (./.nuxt/dist/server/server.js:7925:96)
```
