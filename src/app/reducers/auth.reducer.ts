import { AuthAction, AuthState } from '../context/AuthContext'

export default (state: AuthState, action: AuthAction): AuthState => {
  const { authState } = action

  return {
    ...state,
    isLoggedIn: authState?.isLoggedIn,
    token: authState?.token,
    userDetails: authState?.userDetails,
  }
}
