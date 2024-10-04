import React from 'react'

import { ALERT_MESSAGES } from '../../constants'
import { RESET_ALERT, SET_ALERT } from '../types/common.action.types'

export interface AlertState {
  messageType: string
  messageText: string | JSX.Element
}

export interface AlertAction {
  type: string
  alert: AlertState
}

export const resetAlert = () => {
  return (dispatch: React.Dispatch<Partial<AlertAction>>): void => {
    dispatch({
      type: RESET_ALERT,
    })
  }
}

export const setAlert = (type: string, messageKey: string, messageBody?: JSX.Element) => {
  return (dispatch: React.Dispatch<AlertAction>): void => {
    dispatch({
      type: SET_ALERT,
      alert: {
        messageType: type,
        messageText: messageBody ? messageBody : ALERT_MESSAGES.get(messageKey) || messageKey,
      },
    })
  }
}
