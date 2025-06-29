// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../views/index.vue'
// import MarkdownPost from '@/views/MarkdownPost/index.vue'
// const Home = import("../views/index.vue")
// const Home = { template: '<div>Home</div>' }

const About = import('@/views/About/index.vue')
const Archive = import('@/views/Archive/index.vue')
const MarkdownPost = import('@/views/MarkdownPost/index.vue')
const sb = import('@/views/index.vue')


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/About', component: () => About },
  { path: '/Archive', component: () => Archive },
  { path: '/MarkdownPost', component: () => MarkdownPost, name: "catlogDetail" },
  { path: '/1', component: () => MarkdownPost },
  { path: '/detail', component: () => MarkdownPost },
  { path: '/chat', component: () => import('@/views/Chat/index.vue') },


]












// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    // return { top: 0 }
  },
})


let scrollY = 0


router.beforeEach((to, from, next) => {





  console.log(scrollY);
  // 每次路由切换前滚动到页面顶部
  if (to.path == "/MarkdownPost") {
    scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollTo(0, 10)

  } else {

    window.scrollTo(0, scrollY)
  }




  next()
})


export default router
