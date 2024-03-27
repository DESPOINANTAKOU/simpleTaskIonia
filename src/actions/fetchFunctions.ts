import axiosInstance from './axiosInstance'
import { TVetting } from '../types/vetting'
import { TQuestionnaire } from '../types/questionnaire'
import { TVettingDetail } from '../types/vettingDetail'
import { TData } from '../types/data'

type TResponse<T> = {
  data: T[]
}

type TPaginatedData<T> = TResponse<T> & {
  // T stands for the type of data being paginated
  count: number
}

export const fetchVetting = async (id: number) => {
  const response = await axiosInstance.get<TResponse<TVetting>>(`/vettings/${id}`)
  if (Array.isArray(response.data?.data)) {
    console.log(response.data.data[0])
    return response.data.data[0]
  }
  throw new Error('An error occurred')
}

export const fetchVettings = async (page = 1) => {
  const params = new URLSearchParams()
  params.set('page', page.toString())
  const response = await axiosInstance.get<TPaginatedData<TVetting>>(
    '/vettings_paginated?' + params.toString()
  )
  if (Array.isArray(response.data?.data)) {
    return response.data
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
  const response = await axiosInstance.get<TResponse<TVettingDetail>>(`/vettingdatails/${vetid}`)
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
