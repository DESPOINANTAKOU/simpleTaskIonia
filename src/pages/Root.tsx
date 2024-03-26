import React, { FC } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'

const Layout: FC = () => {
  return (
    <div>
      <header>
        <h1>Ionian Management App</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
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
