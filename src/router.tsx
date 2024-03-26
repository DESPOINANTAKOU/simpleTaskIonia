import { Navigate, createBrowserRouter } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute'
import LoginForm from './pages/LoginForm'
import Root from './pages/Root'
import Vettings from './pages/Vettings'
import Vetting from './pages/Vetting'

const Router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/vettings/" replace />
  },
  {
    element: <AuthRoute redirectPath="/" isAuthorized={false} />,
    children: [
      {
        path: 'login',
        element: <LoginForm />
      }
    ]
  },
  {
    element: <AuthRoute redirectPath="/login/" isAuthorized />,
    children: [
      {
        element: <Root />,
        children: [
          {
            path: 'vettings',
            element: <Vettings />
          },
          {
            path: 'vettings/:id',
            element: <Vetting />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
])

export default Router
