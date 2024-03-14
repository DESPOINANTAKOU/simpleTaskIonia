import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import Vetting from './pages/Vetting'
import Vettings from './pages/Vettings'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginForm />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/Vettings" element={<Vettings />}>
        <Route path="/:id" element={<Vetting />} />
      </Route>
      <Route path="*" element={<Navigate to="/Login" replace />} />
    </>
  )
)

export default router
