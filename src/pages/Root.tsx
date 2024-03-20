import React, { FC } from 'react'
import { Outlet } from 'react-router'
import LoginForm from './LoginForm'
import Root from './Root'
import { NavLink } from 'react-router-dom'

const Layout: FC = () => {
  return (
    <div>
      <header>
        <h1>Ionian Management App</h1>
      </header>
      <nav>
        <ul>
          <li>
          <NavLink to="/vettings">Home</NavLink>
          </li>
          <li>
          <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>

      <footer>
        <p></p>
      </footer>
    </div>
  )
}

export default Layout
