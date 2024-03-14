import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// eslint-disable-next-line import/extensions
import router from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
