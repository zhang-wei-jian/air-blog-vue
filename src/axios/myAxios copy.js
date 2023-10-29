import axios from 'axios'

// axios.defaults.baseURL =  'http://develop.400fzy.com/'
axios.defaults.baseURL = 'http://120.24.61.37:9501/'
// axios.defaults.baseURL = 'https://crm.yunocean.com/'
// axios.defaults.baseURL =  'http://36.138.6.3:80/'
// axios.defaults.withCredentials = true
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// axios.defaults.header.post['Content-Type'] = 'application/json'
axios.defaults.headers['Accept'] = 'fz56yse2881nd2r0fz56yse2881nd2r0'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response, '响应体');

  // return response.data.data;
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios
