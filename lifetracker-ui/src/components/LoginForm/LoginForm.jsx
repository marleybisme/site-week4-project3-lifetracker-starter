import * as React from "react";
import './LoginForm.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiClient from "../../../../services/apiClient";
import { useEffect } from "react";


function LoginForm({ setAppState, appState }) {
  const navigate = useNavigate()
  //const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })


  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setErrors((e) => ({ ...e, form: null }))
    
    const {data, error} = await apiClient.loginUser({
      email: form.email,
      password: form.password
    })
    if (error) setErrors((e) => ({ ...e, password: "Ensure all fields are complete and correct." }))
    if (data?.user !== "undefined" && data?.user) {
      setAppState((prevState) => ({
        ...prevState,
        user: data.user,
        loginStatus: true
      }))
      apiClient.setToken(data.token)
      navigate("/activity")
    }
  }
  return (
    <div className="login-form">
      <h1>Welcome!</h1>
    <form className="login-form">
      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input className="form-input" name="email" type="email" placeholder="Start typing email..." onChange={handleOnInputChange} value={form.email}></input>
        {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-field">
        <label htmlFor="password">Password:</label>
        <input className="form-input" name="password" type="password" placeholder="Start typing password..." onChange={handleOnInputChange} value={form.password}></input>
        {errors.password && <span className="error">{errors.password}</span>}
        </div>
      </form>
      <button className="submit-login" onClick={handleOnSubmit}>Login</button>
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