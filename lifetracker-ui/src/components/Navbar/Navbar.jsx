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




// - [ ] Build the **`Navbar`** component to:
//   - [ ] Render JSX that is wrapped by a `nav` element with the class name of `navbar`
//   - [ ] Render the app's logo as an element with the class name of `logo`.
//     - [ ] Inside that element should be a `Link` component from `react-router-dom` that navigates the user to the `/` route when clicked.
//     - [ ] Inside that `Link` component should be the application's logo (text or image).
//   - [ ] Render the `NavLinks.jsx` component with links to each of the resources and the `/activity` route.