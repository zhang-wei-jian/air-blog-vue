import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import VueLazyload from 'vue-lazyload';
import router from './router/index'
import './mock/mockAxios.js'
/* these are necessary styles for vue flow */
// @import '@vue-flow/core/dist/style.css';

// /* this contains the default theme, these are optional styles */
// @import '@vue-flow/core/dist/theme-default.css';


const app = createApp(App)
app.use(ElementPlus).use(VueLazyload).use(router)


app.mount('#app')
