import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('myToken')}`
  }
})

export default axiosInstance
