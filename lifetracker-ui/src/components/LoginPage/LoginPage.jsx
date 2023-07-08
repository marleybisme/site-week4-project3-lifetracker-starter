import * as React from "react";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar"
function LoginPage({setAppState, appState}) {
  
  return (
    <> 
    
    <div className="login-page">
    <LoginForm setAppState={setAppState} appState={appState}/>
      </div>
      </>
  )
}

export default LoginPage
