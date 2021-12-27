import React from 'react'
import { GlobalDispatch } from '../store/redux'
import { LocalStorage } from '../../common/utils/localStorageHelper'
import { SessionStorage } from '../../common/utils/sessionStorageHelper'
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
