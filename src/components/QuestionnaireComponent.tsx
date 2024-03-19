import React from 'react'

const QuestionnaireComponent = ({ qid }) => {
  if (!qid) {
    return <div>Error: qid not provided</div>
  }
  return (
    <table>
      <thead>
        <tr>
          <th>qid</th>
          <th>Code</th>
          <th>Text</th>
          <th>GlobalDisplayIndex</th>
          <th>ObjectType</th>
          <th>objectid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{qid.qid}</td>
          <td>{qid.Code}</td>
          <td>{qid.Text}</td>
          <td>{qid.GlobalDisplayIndex}</td>
          <td>{qid.ObjectType}</td>
          <td>{qid.objectid}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default QuestionnaireComponent
