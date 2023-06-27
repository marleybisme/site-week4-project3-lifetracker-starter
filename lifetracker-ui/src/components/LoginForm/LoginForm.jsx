import * as React from "react";
import './LoginForm.css'

function LoginForm() {

  return (
    <div className="login-form">
        <h1>Welcome!</h1>
    <form className="login-form">
        <label for="email">Email:</label>
        <input className="form-input" type="email" placeholder="Start typing email..."></input>
        <label for="password">Password:</label>
        <input className="form-input" type="password" placeholder="Start typing password..."></input>
      </form>
      <button className="submit-login">Login</button>
      <p>New to us? <a href="/register">Sign Up</a></p>

      </div>
  )
}

export default LoginForm






// - [ ] Build the **`LoginForm`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `login-form`
//   - [ ] Render an input element for the following fields:
//     - [ ] `email`
//     - [ ] `password`
//   - [ ] Each `input` element in the form should have a class name of `form-input` and should have the following props set:
//     - [ ] `name` - the `name` of the `input` field being rendered (`email`, `password`)
//     - [ ] `type` - the type of the `input` element (`text`, `email`, `number`, etc.)
//     - [ ] `value` - the current value of the `input` element
//     - [ ] `onChange` - the `onChange` handler function
//   - [ ] Validate the `email` field. If the user has entered text into the `email` field and it doesn't contain an 
// `@` symbol, then an error message should be displayed in an element with the class name of `error` indicating that the entry is not a valid email.
//   - [ ] Gracefully handle errors:
//     - [ ] If the user has attempted to login and gotten a `401` error, then an error message should be displayed in an element with the class name of `error` indicating that the `email` and `password` combination is incorrect.
//     - [ ] If the user has attempted to login and gotten a `400` or `422` error, 
// then an error message should be displayed in an element with the class name of `error` indicating what went wrong.
//   - [X] There should be a `button` element with the class name of `submit-login`:
//     - [X] It should contain the text `"Login"`
//     - [ ] When clicked, it should call the `loginUser` function