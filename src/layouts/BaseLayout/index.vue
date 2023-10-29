<template>
  <div>


    <!-- <Title></Title> -->
    <TemplateComponent></TemplateComponent>

  </div>
</template>

<script setup>


import mockAxios from '../axios/mockAxios'
// import Title from './Title/index.vue'
import TemplateComponent from './template'

import { ref } from 'vue'
import { genFileId } from 'element-plus'
</script>

<style scope>

</style>
