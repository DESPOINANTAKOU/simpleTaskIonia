import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import Vettings from './pages/Vettings'
import Root from './pages/Root'
import Vetting from './pages/Vetting'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="vettings" element={<Vettings />} />
      <Route path="vettings/:id" element={<Vetting />} />
      <Route path="Login" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="Login" replace />} />
    </Route>
  )
)

export default Router
