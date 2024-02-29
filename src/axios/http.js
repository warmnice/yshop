import axios from 'axios'

// 创建Axios实例
const http = axios.create({
  baseURL: 'http://localhost:8082', // 设置基础URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export default http
