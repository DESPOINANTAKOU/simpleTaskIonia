import axiosInstance from './axiosInstance'
import { TVetting } from '../types/vetting'
import { TQuestionnaire } from '../types/questionnaire'
import { TVettingDetail } from '../types/vettingDetail'
import { TData } from '../types/data'

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
  const response = await axiosInstance.get<TResponse<TVetting>>('/vettings')
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data)
    return response.data.data
  }
  throw new Error('An error occurred')
}

export const fetchQuestionnaires = async (qid: number) => {
  const response = await axiosInstance.get<TResponse<TQuestionnaire>>(`/questionnaires/${qid}`)
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data)
    return response.data.data
  }
  throw new Error('An error occurred')
}

export const fetchVettingDetails = async (vetid: number) => {
  const response = await axiosInstance.get<TResponse<TVettingDetail>>(`/vettingdetails/${vetid}`)
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data)
    return response.data.data
  }
  throw new Error('An error occurred')
}

export const fetchData = async (id: number): Promise<TData> => {
  const vetting = await fetchVetting(id)
  const questionnaires = await fetchQuestionnaires(vetting.qid)
  const vettingDetails = await fetchVettingDetails(id)
  return { vetting, questionnaires, vettingDetails }
}
