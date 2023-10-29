<template>
  <h1 v-if="!token && !status">获取Token</h1>
  <h1 v-else-if="status">Status</h1>
  <!-- <h1 v-else-if="!status">获取Tokesn</h1> -->



  <div v-if="loginState">
    <div>登录成功</div>
    <div>token: {{ token }}</div>
  </div>
  <div v-else>
    <!-- <div>{{ token ? '已登录' : '未登录' }}</div> -->
    地址: <input v-model="url" type="text" placeholder="URL"><br />
    KEY: <input v-model="key" type="text" placeholder="key"><br />
    租户: <input v-model="organization" type="text" placeholder="organization" @keyup:Enter="login"><br />
    <p></p>
    <button @click="login"> Go </button>
    <!-- <button @click="login">暂不登录</button> -->

    <p v-if="token"><b>Token: </b>{{ token }}</p>
    <p>{{ status }}</p>
  </div>
</template>

<script  setup>
import { ref } from "vue"
import request from "../../axios/myAxios"
import mockAxios from '../../axios/mockAxios'
import axios from 'axios'

const loginState = ref(false)
const url = ref('http://127.0.0.1:88/api?action=GetToken')
const key = ref('abc')
const organization = ref('')
const status = ref()
const token = ref()

const login = async () => {
  // 截取到协议和域名端口
  let originUrl
  try {
    // 输入全部地址
    originUrl = new URL(url.value).origin
  } catch (error) {
    // 不输入地址
    originUrl = location.origin
  }


  const resToken = await mockAxios.get(`${url.value}`, {
    params: {
      key: key.value,
      organization: organization.value
    }
  })

  console.log(resToken);

  // 如果有token就保存起来接着去请求status
  if (resToken.token) {
    token.value = resToken.token
    // 后续查询status
    const resStatus = await mockAxios.get(`${url.value}`, {

      params: {
        // action: 'GetExtenNames',//不写死
        token: token.value
      }
    })
    status.value = resStatus
  }

  // const res = await request.get(`https://v1.hitokoto.cn/`)
  // console.log(resStatus);

}

</script>

<style scoped>
</style>
