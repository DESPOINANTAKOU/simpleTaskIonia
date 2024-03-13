import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Vettings from '../pages/Vettings'
import Vetting from '../pages/Vetting'
import Login from '../pages/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" index element={<Login />} />
        <Route path="/Vettings" element={<Vettings />} />
        <Route path="/Vetting" element={<Vetting />} />
        <Route path="*" element={<Navigate to="/Table" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
