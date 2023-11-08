<template>
  <TemplateComponent v-bind="attrs"></TemplateComponent>
</template>

<script lang="ts" setup>

import TemplateComponent from './template'
import mockAxios from '../../axios/mockAxios'

import { ref, useAttrs } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()
const attrs = useAttrs()
const props = defineProps()

// console.log(attrs, "attrs");
// console.log(props, "propsS");







const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}




const clickHandle = async () => {
  // mockAxios.post('https://api.closeai-asia.com/v1/chat/completions',{
  // const res = await mockAxios.post('https://cgs.xzhgpt.com/chat-process', {
  const res = await mockAxios.post('/api/chat-stream', {
    // const res = await mockAxios.post('/api/chat-stream', {
    "messages": [
      {
        "role": "user",
        "content": "你好"
      }
    ],
    "stream": true,
    "model": "gpt-3.5-turbo",
    "temperature": 1,
    "presence_penalty": 0
  })

  console.log(res);


}
</script>

<style scope>
.body {
  /* background-color: red; */
}
</style>






