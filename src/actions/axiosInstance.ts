import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('myToken')
      window.location.href = '/login'
    }
  }
)

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('myToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
