import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import axiosInstance from '../actions/axiosInstance'

const LogoutButton = () => {
  const navigate = useNavigate()
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    await axiosInstance.delete('tokens')
    localStorage.removeItem('myToken')
    navigate('/login')
  }
  return (
    <NavLink className="nav-link" onClick={handleClick} to="/login">
      Log out
    </NavLink>
  )
}

export default LogoutButton
