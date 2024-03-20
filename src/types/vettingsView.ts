import { TQuestionnaire } from './questionnaire'
import { TVetting } from './vetting'

type TQuestionnaireView = TQuestionnaire & {
  answer: string | null
}

export type TVettingView = TVetting & {
  questions: TQuestionnaireView[]
}
