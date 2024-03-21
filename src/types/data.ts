import { TQuestionnaire } from './questionnaire'
import { TVetting } from './vetting'
import { TVettingDetail } from './vettingDetail'

export type TData = {
  vetting: TVetting
  questionnaires: TQuestionnaire[]
  vettingDetails: TVettingDetail[]
}
