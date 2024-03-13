import React from 'react'

interface VettingsProp {
  vetid: number
}

const Vetting: React.FC<VettingsProp> = ({ vetid }) => {
  return (
    <div>
      <p>Vet ID: {vetid}</p>
    </div>
  )
}

export default Vetting
