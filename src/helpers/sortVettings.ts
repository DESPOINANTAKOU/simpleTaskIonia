import { TVetting } from '../types/vetting'

const sortVettings = (vettings: TVetting[], orderDirection: string) => {
  const sortedVettings = [...vettings]
  sortedVettings.sort((a, b) => (orderDirection === 'desc' ? b.vetid - a.vetid : a.vetid - b.vetid))
  return sortedVettings
}

export default sortVettings
