import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchData } from '../actions/fetchFunctions'
import { TVettingView } from '../types/vettingsView'
import createView from '../mappers/vettingView'

const Vetting: React.FC = () => {
  const { id } = useParams()
  const [data, setData] = useState<TVettingView | null>(null)

  useEffect(() => {
    if (!id) return
    fetchData(parseInt(id))
      .then(data => setData(createView(data)))
      .catch(error => console.error('Error fetching vetting:', error))
  }, [id])

  if (data === null) {
    return null
  }

  const { questions, ...vetting } = data

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
      <table>
        <thead>
          <tr>
            <th>qid</th>
            <th>Code</th>
            <th>Text</th>
            <th>Answer</th>
            <th>GlobalDisplayIndex</th>
            <th>ObjectType</th>
            <th>objectid</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(q => (
            <tr key={q.objectid}>
              <td>{q.qid}</td>
              <td>{q.Code}</td>
              <td>{q.text}</td>
              <td>{q.answer}</td>
              <td>{q.GlobalDisplayIndex}</td>
              <td>{q.ObjectType}</td>
              <td>{q.objectid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

export default Vetting
