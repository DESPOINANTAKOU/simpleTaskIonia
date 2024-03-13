import axiosInstance from './axiosInstance'

export interface TProduct {
  CarriedOutStatus: number | null
  comments: string | null
  companyrepresentativename: string | null
  inspectiontypeid: number | null
  inspectorname: string | null
  inspectorsirname: null
  majorid: number | null
  port: string | null
  portid: number | null
  qid: number | null
  vesselid: number | null
  vesselname: string | null
  vetid: number | null
}

type TResponse = {
  data: TProduct[]
}

const fetchProducts = async () => {
  const response = await axiosInstance.get<TResponse>('vettings')
  if (Array.isArray(response.data?.data)) {
    return response.data.data
  }
  throw new Error('An error occurred')
}

export default fetchProducts
