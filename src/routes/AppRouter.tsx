import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Table from '../pages/Table'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Table" index element={<Table />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
