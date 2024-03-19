import axiosInstance from './axiosInstance'
import { TVetting } from '../types/vetting'
import { TQuestionnaire } from '../types/questionnaire'

type TResponse<Τ> = {
  data: Τ[]
}

export const fetchVetting = async (id: number) => {
  const response = await axiosInstance.get<TResponse<TVetting>>(`/vettings/${id}`)
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data[0])
    return response.data.data[0]
  }
  throw new Error('An error occurred')
}

export const fetchVettings = async () => {
  const response = await axiosInstance.get<TResponse<TQuestionnaire>>('/vettings')
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data)
    return response.data.data
  }
  throw new Error('An error occurred')
}

export const fetchQuestionnaires = async qid => {
  const response = await axiosInstance.get<TResponse<TQuestionnaire>>('/questionnaires')
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data)
    return response.data.data
  }
  throw new Error('An error occurred')
}
