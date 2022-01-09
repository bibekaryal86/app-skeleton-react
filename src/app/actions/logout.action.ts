import React from 'react'
import { GlobalDispatch } from '../store/redux'
import { LocalStorage, SessionStorage } from '../../common'
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
