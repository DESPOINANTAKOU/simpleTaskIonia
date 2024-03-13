import React from 'react'
import Link from '@mui/material/Link'

interface VettingProp {
  vetid: number
}

const Vetting: React.FC<VettingProp> = ({ vetid }) => {
  return (
    <>
      <Link
        component="a"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.")
        }}>
        vetting No {vetid}
      </Link>{' '}
    </>
  )
}

export default Vetting
