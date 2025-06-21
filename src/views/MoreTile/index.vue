<template>
  <!-- <div> -->
  <TemplateComponent v-bind="attrs"></TemplateComponent>
  <!-- </div> -->
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


console.log(attrs.cover,"!!");









</script>

<style scope>
.body {
  /* background-color: red; */
}
</style>
