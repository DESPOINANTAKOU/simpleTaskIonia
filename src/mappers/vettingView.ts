import { TData } from '../types/data'
import { TQuestionnaireView, TVettingView } from '../types/vettingsView'

const createView = (data: TData): TVettingView => {
  const { vetting, questionnaires, vettingDetails } = data
  return {
    ...vetting,
    questions: questionnaires.map(q => ({
      ...q,
      answer: vettingDetails.find(a => a.objectid === q.objectid)?.answer ?? null
    }))
  }
}

function createView2(data: TData): TVettingView {
  const { vetting } = data
  const { questionnaires } = data
  const { vettingDetails } = data
  const result: TVettingView = {
    ...vetting,
    questions: []
  }
  for (const questionnaire of questionnaires) {
    const newQuestionnaire: TQuestionnaireView = {
      ...questionnaire,
      answer: null
    }
    const vettingDetail = vettingDetails.find(
      vettingDetail => vettingDetail.objectid === questionnaire.objectid
    )
    if (vettingDetail) {
      newQuestionnaire.answer = vettingDetail.answer
    }
    result.questions.push(newQuestionnaire)
  }
  return result
}

export default createView
