import { RESET_ALERT, SET_ALERT } from '../types/common.action.types'
import { AlertAction, AlertState } from '../utils/alerts'

const initialState: AlertState = {
  messageType: '',
  messageText: '',
}

export default function alert(state = initialState, action: AlertAction): AlertState {
  switch (action.type) {
    case SET_ALERT:
      return {
        messageType: action.alert.messageType,
        messageText: action.alert.messageText,
      }
    case RESET_ALERT:
      return initialState
    default:
      return state
  }
}
