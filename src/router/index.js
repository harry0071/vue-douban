//使用vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//1. 定义组件
import Home from 'cp/Home.vue'
import Top250 from 'cp/Top250.vue'
import Us from 'cp/Us.vue'

// 2. 配置路由
const routes = [
  { name:'home', path: '/', component: Home },
  { name: 'top250', path: '/top250', component: Top250 },
  { name:'us', path: '/us', component: Us }
]

// 3. 创建 router 实例，然后将配置 `routes` 传入
const router = new VueRouter({
  routes //routes: routes
})

export default router;