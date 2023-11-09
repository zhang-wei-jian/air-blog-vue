<template>
  <div class="home">
    <div class="home">
      <TemplateComponent :dataList="dataList" :allPosts="dataList"></TemplateComponent>

      <!-- {{ dataList }} -->
    </div>
  </div>
</template>

<script setup>


import mockAxios from '../axios/mockAxios'
// import Title from './Title/index.vue'
import TemplateComponent from './template'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { genFileId } from 'element-plus'
import { getCatlog } from '@/api/catlog.js'


const dataList = ref([
  {
    "frontmatter": {
      "id": 21,
      "title": "Golang net/http & HTTP Serve 源码分析",
      "pubDate": "2035-06-01",
      "description": "很多Go web框架都通过封装 net/http 来实现核心功能，因此学习 net/http 是研究 Gin等框架的基础。",
      "author": "作者是我",
      "tags": [
        "源码",
        "标准库",
        "golang",
        "gin"
      ],
      "theme": "light",
      "content": "",
      "featured": true,
      "cover": {
        // "url": "https://pic.lookcos.cn/i/usr/uploads/2022/04/2067928922.png",
        // "url": "",
        "square": "",
        "alt": "cover"
      }
    },
  },
])



const get = async () => {
  console.log(dataList.value, "  dataList.value   dataList.value ");
  try {
    const res = await getCatlog()
    dataList.value = res.map((item, index) => {
      // frontmatter.cover.url = "https://cdn.seovx.com/ha/?mom=302&timestamp=" + index
      const dataItem = {
        frontmatter: {
          ...item
        }
      }
      dataItem.frontmatter.cover.url = dataItem.frontmatter.cover.url ? dataItem.frontmatter.cover.url : "https://cdn.seovx.com/ha/?mom=302&timestamp=" + index
      return dataItem
    })
  } catch (error) {
    ElMessage.error(error)
  }








}
get()

</script>

<style scope>
</style>
