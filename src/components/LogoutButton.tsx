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
    <NavLink onClick={handleClick} to="/login">
      Log Out
    </NavLink>
  )
}

export default LogoutButton
