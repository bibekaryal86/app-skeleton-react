import { createContext } from 'react'

import { DefaultUserDetails, UserDetails } from '../types/login.data.types'

export interface AuthState {
  isLoggedIn: boolean
  token: string
  userDetails: UserDetails
}

export interface AuthAction {
  authState: AuthState
}

export const DefaultAuthState = {
  isLoggedIn: false,
  token: '',
  userDetails: DefaultUserDetails,
}

// AuthContext.Provider is set at App.tsx
export const AuthContext = createContext({
  auth: DefaultAuthState,
  login: (auth: AuthState) => auth,
})
