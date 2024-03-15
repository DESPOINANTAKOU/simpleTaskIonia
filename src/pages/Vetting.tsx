import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import fetchVetting from '../actions/fetchVetting'
import type TVetting from '../types/vetting'

interface VettingProp {}

const Vetting: React.FC<VettingProp> = () => {
  const [vetting, setVetting] = useState<TVetting | null>(null)

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    if (!id) return
    fetchVetting(parseInt(id))
      .then(vetting => {
        setVetting(vetting)
        console.log(vetting)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [id])

  if (vetting === null) {
    return null
  }

  return (
    <Box>
      <dl>
        <dt>Vetid</dt>
        <dd>{vetting.vetid}</dd>

        <dt>CarriedOutStatus</dt>
        <dd>{vetting.CarriedOutStatus}</dd>

        <dt>Comments</dt>
        <dd>{vetting.comments}</dd>

        <dt>Company Representativename</dt>
        <dd>{vetting.companyrepresentativename}</dd>

        <dt>Inspectiontype id</dt>
        <dd>{vetting.inspectiontypeid}</dd>

        <dt>Inspectorname</dt>
        <dd>{vetting.inspectorname}</dd>

        <dt>Inspectorsirname</dt>
        <dd>{vetting.inspectorsirname}</dd>

        <dt>Majorid</dt>
        <dd>{vetting.majorid}</dd>

        <dt>Port</dt>
        <dd>{vetting.port}</dd>

        <dt>Portid</dt>
        <dd>{vetting.portid}</dd>

        <dt>Qid</dt>
        <dd>{vetting.qid}</dd>

        <dt>Vesselid</dt>
        <dd>{vetting.vesselid}</dd>

        <dt>Vesselname</dt>
        <dd>{vetting.vesselname}</dd>
      </dl>
    </Box>
  )
}

export default Vetting
