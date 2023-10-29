<template>
  <h1 v-if="!status">登录</h1>

  <!-- <h1>{{ status }}</h1> -->

  <div v-if="loginState">
    <div>登录成功</div>
    <div>token: {{ token }}</div>
  </div>
  <div v-else>
    <div>{{ token ? '已登录' : '未登录' }}</div>
    key:<input v-model="key" type="text"><br />
    UIrl:<input v-model="url" type="text"><br />
    <button @click="login">登录</button>
    <!-- <button @click="login">暂不登录</button> -->

    <p v-if="token">
    <h3>Token:</h3>{{ token }}</p>

  </div>
</template>

<script  setup>
import { ref } from "vue"
import request from "../../axios/myAxios"
import mockAxios from '../../axios/mockAxios'
import axios from 'axios'

const loginState = ref(false)
const token = ref()
const key = ref()
const url = ref('/admin/token')
const status = ref()

const login = async () => {
  // 截取到协议和域名端口
  let originUrl
  try {
    originUrl = new URL(url.value).origin
  } catch (error) {
    originUrl = location.origin
  }
  // console.log(originUrl);
  // 利用key发送请求token
  const resToken = await mockAxios.get(`${url.value}`, {
    // const resToken = await mockAxios.get(`/admin/token`, {
    params: {
      key: key.value
    }
  })

  console.log(resToken);

  // 如果有token就保存起来接着去请求status
  if (resToken.token) {
    token.value = resToken.token
    // 后续查询status
    const resStatus = await mockAxios.get(`${originUrl}/admin/status`, {
      // const resStatus = await mockAxios.get(`/admin/status`, {
      params: {
        token: token.value
      }
    })
    status.value = resStatus.status
  }

  // const res = await request.get(`https://v1.hitokoto.cn/`)
  // console.log(resStatus);

}

</script>

<style scoped>
</style>
