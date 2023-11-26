

<template>
  <header>
    <nav class="nav">
      <div class="nav-wrapper">
        <div class="nav-content-wrapper">
          <div class="nav-content">
            <!-- <a href="/" class="nav-title">{"Apple Blog"}</a> -->
            <router-Link to="/" class="nav-title">Apple Blog</router-Link>
            <div class="nav-menu">

              <!-- <a href="/archive" class="nav-item-content">目录</a> -->
              <router-Link to="/archive" class="nav-item-content">
                <div class="nav-item-wrapper">
                  目录</div>
              </router-Link>


              <!-- <a href="/about" class="nav-item-content">关于</a> -->
              <router-Link to="/about" class="nav-item-content">

                <div class="nav-item-wrapper">关于 </div>
              </router-Link>


              <router-Link to="/" class="nav-item-content">

                <div class="nav-item-wrapper">
                  RSS </div>
              </router-Link>
              <!-- <a href="/rss.xml" class="nav-item-content" target="_blank">RSS</a> -->

            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
                                                </a>
                                              </div> -->
  <!-- <hello-world msg="Vite + Vue" /> -->
  <!-- <Antx6></Antx6> -->
  <!-- <LoginToken></LoginToken> -->





  <!-- <router-view v-slot="{ Component }"> </router-view> -->





  <!-- <transition name="fade">
        <component :is="Component" />
      </transition> -->

  <!-- MarkdownPost -->

  <router-view v-slot="{ Component }">




    <transition name="fade">
      <keep-alive :include="['Home']">
        <component :is="Component" />
      </keep-alive>
    </transition>




  </router-view>


  <div class="footer-main">
    <div class="content-body footer-wraper">
      <div class="footer-box">
        <div class="foot-nav">
          <div class="foot-nav-items">
            <div class="item">
              <div class="logo">Apple Blog</div>
              <!-- <div class="email">Email: {SITE_EMAIL}</div> -->
              <div class="email">Email: 34937436@QQ.com</div>
            </div>

            <div class="item products">
              <div class="item-title">作品</div>
              <a href="/" target="_blank">本站博客</a>
              <!-- <a href="https://the.top" target="_blank">TOP Link</a> -->
            </div>

            <div class="item community">
              <div class="item-title">社媒</div>
              <!-- <a href="https://twitter.com/austinit" target="_blank">Twitter</a> -->
              <a href="https://github.com/zhang-wei-jian" target="_blank">Github</a>
              <!-- <a href="https://t.me/austin2035" target="_blank">Telegram</a> -->
            </div>

            <div class="item resources">
              <div class="item-title">赞助商</div>
              <a href="https://twitter.com/elonmusk" target="_blank">Elon Musk</a>
              <a href="https://twitter.com/spaceX" target="_blank">SpaceX</a>
              <a href="https://twitter.com/Tesla" target="_blank">Tesla</a>
              <!-- <a href="https://yufengbiji.com" target="_blank">驭风笔记</a> -->
            </div>

          </div>
        </div>
        <div class="bottom">
          <div class="copyright">
            &copy; {`${year} ${SITE_NAME}`}
            <a href="//github.com/austin2035/astro-air-blog">Astro-air-blog</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>



// import HelloWorld from './components/Helloworld.vue'
import HelloWorld from './components/HelloWorld.vue'
// import Antx6 from './components/antx6.vue'
import LoginToken from "./components/LoginTest/index.vue"
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
import { getCatlog } from '@/api/catlog.js'
const route = useRoute();

watch(route, async (to, from) => {
  // 发起请求获取黑暗模式状态，或者你也可以在路由上带上参数或者在其他地方存储状态


});

const get = () => {
  getCatlog()
}
// get()

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
