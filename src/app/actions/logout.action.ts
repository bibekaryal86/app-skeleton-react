import React from 'react'

import { LocalStorage, SessionStorage } from '../../common'
import { GlobalDispatch } from '../store/redux'
import { USER_LOGOUT } from '../types/login.action.types'

export const userLogout = () => {
  return async (dispatch: React.Dispatch<GlobalDispatch>): Promise<void> => {
    clearLocalData(dispatch)
  }
}

const clearLocalData = (dispatch: React.Dispatch<GlobalDispatch>) => {
  LocalStorage.removeAllItems()
  SessionStorage.removeAllItems()
  dispatch({
    type: USER_LOGOUT,
  })
}
