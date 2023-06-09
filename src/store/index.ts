import type { App } from "vue";

import { createPinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建store并使用持久化存储插件
const store = createPinia();
store.use(piniaPluginPersistedstate);

// store的装载函数
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
