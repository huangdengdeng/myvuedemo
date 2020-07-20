import axios from 'axios'
// import { Message, Loading } from 'element-ui'
const ConfigBaseURL = 'http://192.168.1.103:8888/' // 默认路径，这里也可以使用env来判断环境
// 使用create方法创建axios实例
export const Service = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: ConfigBaseURL,
  method: 'post',
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-type',
    'Content-type': 'application/json'
  }
})
// 添加请求拦截器
Service.interceptors.request.use(config => {
  console.log(config)
  return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('TCL: error', error)
  return Promise.reject(error)
})
