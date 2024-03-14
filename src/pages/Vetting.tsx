import React from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

interface VettingProp {}

const Vetting: React.FC<VettingProp> = () => {
  const { id } = useParams()

  return <Box />
}

export default Vetting
