import axios from 'axios'
import { constant } from './constant'


// 使用create方法创建axios实例
const Service = axios.create({
  timeout: 20000, // 请求超时时间
  baseURL: constant.baseUrl,
})
// 添加请求拦截器
Service.interceptors.request.use((config) => config)
// 添加响应拦截器
Service.interceptors.response.use(
  (response) => response
  ,
  (error) => Promise.resolve(error.response),
)

// eslint-disable-next-line import/prefer-default-export

// eslint-disable-next-line import/prefer-default-export
export const request = ({ method, url, params, data }) => (
  Service.request({
    method,
    url,
    params,
    data,
  })
)
