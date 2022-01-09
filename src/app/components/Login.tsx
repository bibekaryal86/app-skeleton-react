import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Input, InputType } from '../../common'
import { Button } from '../../common'
import { validateLogInInput } from '../utils/loginValidate'
import { ALERT_TYPE_FAILURE, ALERT_TYPE_INFO, MSG_KEY_INVALID_SIGNIN, MSG_KEY_SIGNIN_FIRST } from '../../constants'
import { AuthContext } from '../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { userLogin } from '../actions/login.action'
import { LoginResponse } from '../types/login.data.types'
import { LocalStorage } from '../../common'
import moment from 'moment'
import { DisplayCardRow, DisplayCardWrapperBody } from '../../styles'

interface SignInProps {
  setAlert: (type: string, messageKey: string) => void
  resetAlert: () => void
  setSpinner: () => void
  resetSpinner: () => void
}

const Login = (props: SignInProps): React.ReactElement => {
  const { setAlert, resetAlert, setSpinner, resetSpinner } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (newValue: string) => setUsername(newValue)
  const handlePasswordChange = (newValue: string) => setPassword(newValue)

  const userLoginSuccessLocalStorageActions = (loginResponse: LoginResponse) => {
    LocalStorage.setItem('token', loginResponse.token)
    LocalStorage.setItem('tokenExpiration', moment().add(15, 'minutes'))
    LocalStorage.setItem('userDetails', loginResponse.userDetails)
  }

  //update context when sign in
  const authContext = useContext(AuthContext)

  // redirect to home or selected page upon successful sign in
  const { state } = useLocation() as { state: { redirect: string; message: string } }
  const navigate = useNavigate()

  const handleSubmit = useCallback(async () => {
    setSpinner()
    const isInputValid = validateLogInInput(username, password)

    if (isInputValid) {
      const loginResponse = await userLogin(username, password)

      if (loginResponse.errMsg) {
        setAlert(ALERT_TYPE_FAILURE, loginResponse.errMsg)
      } else {
        const auth = {
          isLoggedIn: true,
          token: loginResponse.token,
          userDetails: loginResponse.userDetails,
        }

        authContext.login(auth)
        resetAlert()
        userLoginSuccessLocalStorageActions(loginResponse)
        navigate(state?.redirect || '/home', {
          replace: true,
          state: { redirect: '' },
        })
      }
    } else {
      setAlert(ALERT_TYPE_FAILURE, MSG_KEY_INVALID_SIGNIN)
    }

    resetSpinner()
  }, [authContext, navigate, password, resetAlert, resetSpinner, setAlert, setSpinner, state?.redirect, username])

  const onSearchEnterCallback = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    },
    [handleSubmit],
  )

  const signInForm = () => (
    <DisplayCardWrapperBody alignContent="center" width="20%">
      <DisplayCardRow>
        <h3>Welcome Back!</h3>
        <p>Please Sign In</p>
      </DisplayCardRow>
      <DisplayCardRow borderTop borderBtm>
        <form>
          <Input
            id="sign_in_user_name"
            label="Username"
            onChange={handleUsernameChange}
            value={username}
            placeholder="username..."
            required
            autoComplete="username"
            onKeyPress={onSearchEnterCallback}
          />
          <Input
            id="sign_in_password"
            label="Password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="password..."
            type={InputType.password}
            required
            autoComplete="current-password"
            onKeyPress={onSearchEnterCallback}
          />
        </form>
      </DisplayCardRow>
      <DisplayCardRow textAlign="center">
        <Button id={'sign-in-submit'} title="Sign In" onClick={handleSubmit} includeBorder color="green" />
        <Button
          id={'sign-in-create'}
          title="Create Account"
          onClick={() => alert('TODO: Currently Unavailable')}
          includeBorder
          color="orange"
        />
      </DisplayCardRow>
      <DisplayCardRow borderTop textAlign="center">
        <Button id={'sign-in-forgot'} title="Forgot Password?" onClick={() => alert('TODO: Currently Unavailable')} />
      </DisplayCardRow>
    </DisplayCardWrapperBody>
  )

  useEffect(() => {
    if (state?.message?.length) {
      setAlert(ALERT_TYPE_INFO, state.message)
    }
    if (state?.redirect && !authContext.auth.isLoggedIn) {
      setAlert(ALERT_TYPE_FAILURE, MSG_KEY_SIGNIN_FIRST)
    }
    // state.message = ''
  }, [authContext.auth.isLoggedIn, setAlert, state])

  return <>{signInForm()}</>
}

export default Login
