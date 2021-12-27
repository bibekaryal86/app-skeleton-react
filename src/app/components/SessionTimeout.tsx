import { Fragment, useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import moment from 'moment'
import { LocalStorage } from '../../common/utils/localStorageHelper'
import { AuthContext } from '../context/AuthContext'
import { DefaultUserDetails } from '../types/login.data.types'
import { useNavigate } from 'react-router-dom'
import { MSG_KEY_SESSION_INVALID } from '../../common/utils/constants'

interface LogoutProps {
  userLogout: () => void
}

const SessionTimeout = (props: LogoutProps) => {
  // log out when inactive
  const { userLogout } = props
  // redirect to home page when log out
  const navigate = useNavigate()
  // also update context when log out
  const authContext = useContext(AuthContext)

  const events = useMemo(() => ['keypress', 'mousemove', 'click'], [])
  const warningInactiveInterval = useRef(0)
  const startTimerInterval = useRef(0)

  const warningInactive = useCallback(
    (timeString: string) => {
      clearTimeout(startTimerInterval.current)
      warningInactiveInterval.current = window.setInterval(() => {
        const isAuthenticated = timeString?.trim()?.length > 0

        const expirationTime = moment(timeString)
        const currentTime = moment()

        if (isAuthenticated && expirationTime.isSameOrBefore(currentTime)) {
          console.log('Token Expired, Redirecting to Home')
          clearInterval(warningInactiveInterval.current)
          userLogout()
          authContext.login({
            isLoggedIn: false,
            token: '',
            userDetails: DefaultUserDetails,
          })

          navigate('/', {
            replace: true,
            state: { message: MSG_KEY_SESSION_INVALID },
          })
        }
      }, 1000)
    },
    [authContext, navigate, userLogout],
  )

  // start inactive check
  const timeChecker = useCallback(() => {
    startTimerInterval.current = window.setTimeout(() => {
      const storedTimeStamp = LocalStorage.getItem('tokenExpiration') as string
      warningInactive(storedTimeStamp)
    }, 60000)
  }, [warningInactive])

  // reset interval timer
  const resetTimer = useCallback(() => {
    clearTimeout(startTimerInterval.current)
    clearInterval(warningInactiveInterval.current)

    const isAuthenticated = (LocalStorage.getItem('tokenExpiration') as string)?.length > 0

    if (isAuthenticated) {
      LocalStorage.setItem('tokenExpiration', moment().add(15, 'minutes'))
    } else {
      clearInterval(warningInactiveInterval.current)
    }

    timeChecker()
  }, [timeChecker])

  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    timeChecker()

    return () => {
      clearTimeout(startTimerInterval.current)
      resetTimer()
    }
  }, [resetTimer, events, timeChecker])

  // change fragment to modal and handleClose func to close
  return <Fragment />
}

export default SessionTimeout
