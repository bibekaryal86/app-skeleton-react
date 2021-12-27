import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LoginContainer from './LoginContainer'
import Home from '../../home/components/Home'
import NotFound from './NotFound'
import LogoutContainer from './LogoutContainer'
import { LocalStorage } from '../../common/utils/localStorageHelper'

const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={'/'} element={<LoginContainer />} />
      <Route path={'/logout'} element={<LogoutContainer />} />

      <Route
        path={'/home'}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

function RequireAuth({ children }: { children: React.ReactElement }) {
  const location = useLocation()
  const isLoggedIn = LocalStorage.getItem('token') as string
  return isLoggedIn?.length ? (
    children
  ) : (
    <Navigate to="/" replace state={{ redirect: location.pathname }} />
  )
}

export default AppRoutes
