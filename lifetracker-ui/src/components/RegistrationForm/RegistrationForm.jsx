import * as React from "react";
import './RegistrationForm.css'
import Navbar from "../Navbar/Navbar";
import apiClient from "../../../../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegistrationForm({ setAppState, appState }) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })


  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } 
      if (!event.target.value) {
        setErrors((e) => ({ ...e, password: "Enter a password!" }))
      }
      else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } 
      
      else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      return
    } 
    else if (!form.password || !form.passwordConfirm) {
      setErrors((e) => ({ ...e, passwordConfirm: "Enter a password!" }))
    }
    else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    const res = await apiClient.signupUser({
      firstname: form.firstname,
      lastname: form.lastname,
      username: form.username,
      email: form.email,
      password: form.password
    })
    const {data, error} = res

    if (error) setErrors((e) => ({ ...e, form: error }))
    if(data?.status === 400){
      setErrors((e) => ({...e, email: data.message}))
    }
    if (data) {
      setAppState((prevState) => {
        return {
          ...prevState,
          user: data.user,
          loginStatus: true
        };
      });      
      navigate("/activity")
      apiClient.setToken(data.token)
      localStorage.setItem("lifetracker_token", data.token)
    }
    
  }
  return (
    <> 
    <div className="registration-form">
        <h1>Become a Member Now!</h1>
    <form className="registration-form">
      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input className="form-input" name="email" type="email" placeholder="Start typing email..." onChange={handleOnInputChange} value={form.email}></input>
        {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-field">
        <label htmlFor="username">Username:</label>
        <input className="form-input" required name="username" type="text" placeholder="Start typing username..." onChange={handleOnInputChange} value={form.username}></input>
        {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="input-field">
        <label htmlFor="firstname">First Name:</label>
        <input className="form-input" name="firstname" type="text" onChange={handleOnInputChange} placeholder="Start typing first name..." value={form.firstname}></input>
        {errors.firstname && <span className="error">{errors.firstname}</span>}
        </div>

        <div className="input-field">
        <label htmlFor="lastname">Last Name:</label>
        <input className="form-input" name="lastname" type="text" onChange={handleOnInputChange} placeholder="Start typing last name..." value={form.lastname}></input>
        {errors.lastname && <span className="error">{errors.lastname}</span>}
      </div>

        <div className="input-field">
        <label htmlFor="password">Password:</label>
        <input className="form-input" required name="password" type="password" placeholder="Start typing password..." onChange={handleOnInputChange} value={form.password}></input>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
        <div className="input-field">
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input className="form-input" required name="passwordConfirm" type="password" placeholder="Re-type password..." onChange={handleOnInputChange} value={form.passwordConfirm}></input>
        {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
    </div>
      </form>
      <button className="submit-login" onClick={handleOnSubmit}>Create Account</button>

        <p>Have an account? <a href="/login">Login</a></p>
      </div>
      </>
  )
}

export default RegistrationForm









// - [ ] Build the **`RegistrationForm`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `registration-form`
//   - [ ] Should render an input element for the following fields:
//     - [ ] `email`
//     - [ ] `username`
//     - [ ] `firstname`
//     - [ ] `lastname`
//     - [ ] `password`
//     - [ ] `passwordConfirm`
//   - [ ] Each `input` element in the form should have a class name of `form-input` and should have the following props set:
//     - [ ] `name` - the `name` of the `input` field being rendered (`email`, `username`, `firstname`, `lastname`, `password`, `passwordConfirm`)
//     - [ ] `type` - the type of the `input` element (`text`, `email`, `number`, etc.)
//     - [ ] `value` - the current value of the `input` element
//     - [ ] `onChange` - the `onChange` handler function
//   - [ ] Validate the `email` field: If the user has entered text into the `email` field and it doesn't contain an `@` symbol, then an error message should be displayed in an element with the class name of `error` indicating that the entry is not a valid email.
//   - [ ] Validate the `password` and `passwordConfirm` fields: If the user has entered text into the `password` and `passwordConfirm` fields and they don't match, then a message should be displayed in an element with the `className` of `error` with a message that contains the text: `passwords don't match`
//   - [ ] Gracefully handle errors:
//     - [ ] If the user has attempted to login and gotten a `401` error, then the `errors` object should contain a `form` property that contains a message indicating that the `email` and `password` combination is incorrect.
//     - [ ] If the user has attempted to login and gotten a `400` or `422` error, then the `errors` object should contain a `form` property that contains a message indicating what went wrong.
//   - [ ] There should be a `button` element with the `className` of `submit-registration`:
//     - [ ] It should contain the text `"Create Account"`
//     - [ ] When clicked, it should call the `signupUser` function