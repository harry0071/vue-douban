//使用vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//1. 定义组件
import Home from '@/pages/Home.vue';
const Top250 = () => import(/* webpackChunkName: "top250" */ '@/pages/Top250.vue');
const Us = () => import(/* webpackChunkName: "us" */ '@/pages/Us.vue');
const Search = () => import(/* webpackChunkName: "search" */ 'cp/Search.vue');
const Detail = () => import(/* webpackChunkName: "detail" */ '@/pages/Detail.vue');

// 2. 配置路由
const routes = [
  { name:'home', path: '/', component: Home },
  { name: 'top250', path: '/top250', component: Top250 },
  { name:'us', path: '/us', component: Us },
  { name:'search', path: '/search', component: Search },
  { name:'detail', path: '/detail', component: Detail }
]

// 3. 创建 router 实例，然后将配置 `routes` 传入
const router = new VueRouter({
  routes //routes: routes
})

export default router;