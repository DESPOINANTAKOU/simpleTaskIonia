import TVetting from '../types/vetting'
import axiosInstance from './axiosInstance'

type TResponse = {
  data: TVetting[]
}

const fetchVettings = async () => {
  const response = await axiosInstance.get<TResponse>('/vettings')
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data)
    return response.data.data
  }
  throw new Error('An error occurred')
}

export default fetchVettings
