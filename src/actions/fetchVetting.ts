import TVetting from '../types/vetting'
import axiosInstance from './axiosInstance'

type TResponse = {
  data: TVetting[]
}

const fetchVetting = async (id: number) => {
  const response = await axiosInstance.get<TResponse>(`/vettings/${id}`)
  return response.data.data[0]
}

export default fetchVetting
