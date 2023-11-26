<template>
  <div>
    <TemplateComponent :catlogItem="catlogItem"></TemplateComponent>
  </div>
</template>

<script  setup>

import TemplateComponent from './template'
import mockAxios from '../../axios/mockAxios'

import { nextTick, ref } from 'vue'
import { ElMessage, genFileId } from 'element-plus'
import { useRoute } from 'vue-router'

import { getCatlogId } from '@/api/catlog.js'




const route = useRoute()
const catlogItem = ref({
  "id": 21,
  "title": "",
  "pubDate": "",
  "description": "",
  "author": "",

  "tags": [

  ],
  "theme": "",
  "featured": true,
  "cover": {

    "square": "",
    "alt": ""
  },
  "content": "",
})

// 获取idDetail
const getId = async () => {
  const id = route.query.id
  if (!id) return
  try {
    const res = await getCatlogId(id)
    catlogItem.value = res
  } catch (error) {
    ElMessage.error(error)
  }

}

getId()




// 跳转逻辑写这里就行了，数据更新，获取body元素改变class

const clickHandle = async () => {

}
</script>

<script>
export default {
  name: 'MarkdownPost',

};

</script>

<style scope>
</style>






