import { useNavigate } from 'react-router-dom'
import React from 'react'
import axiosInstance from '../actions/axiosInstance'

type TLogin = {
  username: string
  password: string
}

type TResponse = {
  token: string
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = React.useState<TLogin>({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const authenticateWithCredentials = async () => {
    try {
      const response = await axiosInstance.post<TResponse>(
        'tokens',
        {},
        {
          auth: {
            username: formData.username,
            password: formData.password
          }
        }
      )
      const myToken: string = response.data.token
      localStorage.setItem('myToken', myToken)
      if (myToken) {
        console.log('Authentication successful. Data object:', myToken)
      } else {
        console.error('Authentication failed. Unexpected response:', response)
      }
      return true
    } catch (error) {
      console.error('Error during authentication:', error)
    }
    return false
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.removeItem('myToken')
    const success = await authenticateWithCredentials()
    if (success) {
      navigate('/')
    }
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
