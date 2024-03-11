import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Table from '../pages/Table'
import Login from '../pages/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" index element={<Login />} />
        <Route path="/Table" index element={<Table />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
