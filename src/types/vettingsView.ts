import { TQuestionnaire } from './questionnaire'
import { TVetting } from './vetting'

export type TVettingView = TVetting & {
  questions: TQuestionnaireView[]
}

export type TQuestionnaireView = TQuestionnaire & {
  answer: string | null
}
