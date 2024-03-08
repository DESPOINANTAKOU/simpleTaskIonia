import axiosInstance from 'axios'

export type TProduct = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: [string]
  todo: string
}

type TResponse = {
  products: TProduct[]
}

const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get<TProduct>('https://dummyjson.com/todo/random')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default fetchProducts
