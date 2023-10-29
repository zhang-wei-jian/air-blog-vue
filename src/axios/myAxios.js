import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://120.24.61.37:9501/',
  headers: {
    Accept: 'fz56yse2881nd2r0fz56yse2881nd2r0'
  }
})

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response, '响应体');
  // return response.data.data;
  return response.data.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
