/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import axiosInstance from '../actions/axiosInstance'

type TLogin = {
  username: string
  password: string
}

type TResponse = {
  token: string
}

const Login = () => {
  const [formData, setFormData] = React.useState<TLogin>({
    username: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.removeItem('loginData')
    // try catch
    const {
      data: { token }
    } = await axiosInstance.post<TResponse>(
      'tokens',
      {},
      {
        auth: {
          username: formData.username,
          password: formData.password
        }
      }
    )
    localStorage.setItem('loginData', token)
    // history.push()
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
            name="first"
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

export default Login
