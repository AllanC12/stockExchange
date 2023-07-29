import React from 'react'
import { useState } from 'react'

import logo from "../../public/img/logo.png"

const NavBar = () => {

  const [statusUser,setStatusUser] = useState(false)

  return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logotipo" />
        </div>
        {
          statusUser ? (
            <p>Logado</p>
          ) : (
            <p>Não logado</p>
          )
        }
      </nav>
  )
}

export default NavBar