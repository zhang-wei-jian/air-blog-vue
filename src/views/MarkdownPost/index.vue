<template>
  <div>
    <TemplateComponent></TemplateComponent>
  </div>
</template>

<script lang="ts" setup>

import TemplateComponent from './template'
import mockAxios from '../../axios/mockAxios'

import { ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

// const submitUpload = () => {
//   upload.value!.submit()
// }






// 跳转逻辑写这里就行了，数据更新，获取body元素改变class

const clickHandle = async () => {

}
</script>

<style scope>
</style>






