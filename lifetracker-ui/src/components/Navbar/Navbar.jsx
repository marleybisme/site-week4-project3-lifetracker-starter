import * as React from "react"
import "./Navbar.css"
import Navlinks from "../Navlinks/Navlinks"

export default function Navbar({appState, handleLogin, handleLogout}) {
  return (
    <nav className="navbar">
      <Navlinks appState={appState} handleLogout={handleLogout} handleLogin={handleLogin}/>
    </nav>
        
  )
}
