import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import { loadingBar } from "/@/components/Dialog";
const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('../views/login/login.vue')
  // },

  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../views/login/login.vue'),
  // },

]
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes
})
router.beforeEach((to, from) => {
  // ...
  loadingBar.start()
  // 返回 false 以取消导航
  // return false
})
router.afterEach((to, from) => {
  // ...
  loadingBar.finish()
  // 返回 false 以取消导航
  // return false
})
export { router }

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}