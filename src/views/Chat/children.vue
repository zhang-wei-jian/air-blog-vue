<template>
  <div>
    <div>

      <h1>
        children
      </h1>
      {{ sum }}
      <!-- {{ props.sum }} -->
      <el-button @click="SubmitHandle">children</el-button>


    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useAttrs, toRefs } from 'vue'

import TemplateComponent from './template'
import { postChat } from '@/api/chat.js'
import axuis from 'axios'
import { ElMessage } from 'element-plus'

import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()
const attrs = useAttrs()
// const props = defineProps()

const props = defineProps(["sum"])

const { sum } = toRefs(props)
// let { sum } = ref(props.sum)
// const { sum } = props
// console.log(attrs, "attrs");
// console.log(props, "propsS");
const SubmitHandle = async () => {
  // console.log(await axuis.get("/getData"));

  console.log(sum);

  sum.value++
  console.log(sum);

  // const res = await postChat()
  // console.log(res);
  // ElMessage.success(res)
}







const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

// const submitUpload = () => {
//   upload.value!.submit()
// }


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






