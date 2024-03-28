import React, { FC } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'

const handleLogout = () => {
  // Logic to handle logout
}

const Layout: FC = () => {
  return (
    <div>
      <header>
        <h1 className="text-center">Ionian Management App</h1>
      </header>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p />
      </footer>
    </div>
  )
}

export default Layout
