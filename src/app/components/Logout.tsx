import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { DefaultUserDetails } from '../types/login.data.types'

interface LogoutProps {
  userLogout: () => void
}

const Logout = (props: LogoutProps): React.ReactElement => {
  // also update context when log out
  const authContext = useContext(AuthContext)
  const { userLogout } = props

  useEffect(() => {
    userLogout()

    const auth = {
      isLoggedIn: false,
      token: '',
      userDetails: DefaultUserDetails,
    }

    authContext.login(auth)
  }, [authContext, userLogout])

  return <Navigate to="/" />
}

export default Logout
