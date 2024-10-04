import React, { useCallback, useEffect, useReducer } from 'react'
import { connect } from 'react-redux'

import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import SessionTimeoutContainer from './SessionTimeoutContainer'
import { Alert, LocalStorage, resetSpinner, setSpinner, Spinner } from '../../common'
import { AllGlobalStyles } from '../../styles'
import { AuthContext, AuthState, DefaultAuthState } from '../context/AuthContext'
import authReducer from '../reducers/auth.reducer'
import { UserDetails } from '../types/login.data.types'

const AppRender = ({ components }: { components: React.ReactElement[] }) => {
  return (
    <>
      {components.map((component: React.ReactElement) => (
        <div key={component.key} className="row">
          <div className="twelve columns">{component}</div>
        </div>
      ))}
    </>
  )
}

function App(): React.ReactElement {
  const [auth, setAuth] = useReducer(authReducer, DefaultAuthState)

  // Set Auth Context from Local Storage on Page Reload
  const checkLogin = useCallback((auth: AuthState): AuthState => {
    setAuth({ authState: auth })
    return auth
  }, [])

  useEffect(() => {
    const token = LocalStorage.getItem('token') as string
    const userDetails = LocalStorage.getItem('userDetails') as UserDetails
    const isLoggedIn = !!token
    const authState = {
      isLoggedIn,
      token,
      userDetails,
    }
    checkLogin(authState)
  }, [checkLogin])

  const theApp = () => (
    <div>
      <SessionTimeoutContainer />
      <AllGlobalStyles />
      <AuthContext.Provider
        value={{
          auth,
          login: checkLogin,
        }}
      >
        <div className="container">
          <AppRender
            components={[
              <Header key="app-header-key" />,
              <Alert key="app-alert-key" />,
              <Spinner key="app-spinner-key" size="20" />,
              <Body key="app-body-key" />,
              <Footer key="app-footer-key" />,
            ]}
          />
        </div>
      </AuthContext.Provider>
    </div>
  )

  return <>{theApp()}</>
}

const mapDispatchToProps = {
  setSpinner: () => setSpinner(),
  resetSpinner: () => resetSpinner(),
}

export default connect(null, mapDispatchToProps)(App)
