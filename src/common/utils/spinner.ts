import React from 'react'

import { RESET_SPINNER, SET_SPINNER } from '../types/common.action.types'

export interface SpinnerState {
  isLoading: boolean
}

export interface SpinnerAction {
  type: string
  spinner: SpinnerState
}

export const setSpinner = () => {
  return (dispatch: React.Dispatch<SpinnerAction>): void => {
    dispatch({
      type: SET_SPINNER,
      spinner: {
        isLoading: true,
      },
    })
  }
}

export const resetSpinner = () => {
  return (dispatch: React.Dispatch<SpinnerAction>): void => {
    dispatch({
      type: RESET_SPINNER,
      spinner: {
        isLoading: true,
      },
    })
  }
}
