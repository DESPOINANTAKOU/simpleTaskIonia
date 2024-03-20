import React from 'react'
import { TQuestionnaire } from '../types/questionnaire'

interface ΙQuestionnaire {
  data: TQuestionnaire
}

const Questionnaire: React.FC<ΙQuestionnaire> = ({ data }) => {
  return (
    <tr>
      <td>{data.qid}</td>
      <td>{data.Code}</td>
      <td>{data.Text}</td>
      <td>{data.GlobalDisplayIndex}</td>
      <td>{data.ObjectType}</td>
      <td>{data.objectid}</td>
    </tr>
  )
}

export default Questionnaire
