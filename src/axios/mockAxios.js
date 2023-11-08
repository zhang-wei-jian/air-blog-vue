import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
const instance = axios.create({
  // baseURL: 'http://120.24.61.37:9501/',
  // baseURL: '/api',
  // baseURL: '/port',
  headers: {


    // Accept: 'fz56yse2881nd2r0fz56yse2881nd2r0'
    afflicode: 'cA2XKWDBiAXZvp6E',
    xxxxxx: 'xxxxxxxx',
    // "Content-Type": 'application/json',
    // "Content-Type": "Bearer sk-xxxxx"
    // "Authorization": "Bearer sk-QoY5w87RNuzkTChSQQDkG3GmjFTI2ZAo20ouRVpEKlLgl334"

    // https://cgs.xzhgpt.com/chat-process
  }
})

instance.interceptors.request.use(function (config) {
  // Do something before request is sent

  config.headers.sssssssssssss = 'sssssssss'

  nprogress.start()
  // console.log(config, '请求体');


  return config;
}, function (error) {
  // Do something with request error
  alert('错误访问', error);
  // return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  nprogress.done()
  // console.log(response);

  // Do something with response data
  // console.log(response, '响应体');
  // return response.data.data;
  return response.data;
}, function (error) {
  console.log(error.response.status, '状态吗');
  // alert('sorry,出错了')

  // Do something with response error
  const errorMsg = error.response.data.error
  console.log(errorMsg, '状态吗');
  alert(errorMsg);
  // alert(error.response.data);
  // if (error.response.status === 400) alert(error.response.data);
  // if (error.response.status === 401) alert('未授权' + errorMsg);
  // if (error.response.status === 403) alert('禁止访问');
  // if (error.response.status === 404) alert('错误访问');
  // // if (error.response.status <= 500) alert('服务器错误');
  // if (error.response.status === 5000) alert('服务器出错');

  nprogress.done()
  // return Promise.reject(error);
});

export default instance;
