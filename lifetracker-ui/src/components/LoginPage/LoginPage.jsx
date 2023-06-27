import * as React from "react";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar"
function LoginPage() {

  return (
    <> 
    
    <div className="login-page">
    <LoginForm />
      </div>
      </>
  )
}

export default LoginPage


// - [ ] Build the **`LoginPage`** component to:
//   - [X] Render JSX that is wrapped by an element with the class name of `login-page`
//   - [ ] Using either a custom hook, context, or manually set state, check to see if a user is already logged in
//     - [ ] If the user is already logged in, redirect them to the `/activity` page.
//     - [ ] If no user is authenticated, render the `LoginForm` component and pass it any props it needs.
