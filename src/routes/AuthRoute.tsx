import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

type TAuthRoute = {
  redirectPath?: string
  isAuthorized?: boolean
}

const AuthRoute: FC<TAuthRoute> = ({ redirectPath = '/login', isAuthorized = true }) => {
  const token = localStorage.getItem('myToken')
  const location = useLocation()
  if ((isAuthorized && token) || (!isAuthorized && !token)) {
    return <Outlet />
  }
  if (!isAuthorized) {
    const prevLocation = location.state?.from as Location | null
    return <Navigate to={prevLocation ?? redirectPath ?? '/'} replace />
  }
  return <Navigate to={redirectPath} state={{ from: location }} replace />
}

export default AuthRoute
