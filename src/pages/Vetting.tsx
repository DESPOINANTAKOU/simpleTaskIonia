import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import {
  fetchVetting,
  fetchQuestionnaires,
  fetchQuestionnaireAnswers
} from '../actions/fetchFunctions'
import type { TVetting } from '../types/vetting'
import { TQuestionnaire } from '../types/questionnaire'
import Questionnaire from '../components/Questionnaire'
import { TVettingView } from '../types/vettingsView'

const Vetting: React.FC = () => {
  const [vetting, setVetting] = useState<TVetting | null>(null)
  const [questionnaires, setQuestionnaires] = useState<TQuestionnaire[]>([])
  const [answers, setAnswers] = useState<TQuestionnaire[]>([])

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    if (!id) return
    fetchVetting(parseInt(id))
      .then(vetting => {
        setVetting(vetting)
        console.log(vetting)
        fetchQuestionnaires(vetting.qid)
          .then(questionnaires => {
            setQuestionnaires(questionnaires)
            console.log(questionnaires)
            fetchQuestionnaireAnswers(id)
              .then(answers => {
                setAnswers(answers)
              })
              .catch(error => console.error('Error fetching questionnaire answers:', error))
          })
          .catch(error => console.error('Error fetching questionnaires:', error))
      })
      .catch(error => console.error('Error fetching vetting:', error))
  }, [id])

  if (vetting === null) {
    return null
  }

  useEffect(() => {
    const vettingView: TVettingView = {
      ...vetting,
      questions: questionnaires.map(q => ({
        ...q,
        answer: answers.find(a => a.objectid === q.objectid)?.answer
      }))
    }
  }, [answers])

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
            <th>GlobalDisplayIndex</th>
            <th>ObjectType</th>
            <th>objectid</th>
          </tr>
        </thead>
        <tbody>
          {questionnaires.map(q => (
            <Questionnaire key={q.objectid} data={q} />
          ))}
        </tbody>
      </table>
    </Box>
  )
}

export default Vetting
