import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import apiClient from "../../../../services/apiClient";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ActivityPage from "../ActivityPage/ActivityPage";
import SleepPage from "../SleepPage/SleepPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import { useState } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode"



function App() {
  const [appState, setAppState] = useState({
    user: {},
    loginStatus: false,
    nutrition: [],
    sleep: [],
    exercise: []
  })
  const [username, setUsername] = useState()
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const { data, error } = await apiClient.listPosts()
  //     if (data) setPosts(data.posts)
  //     if (error) setError(error)
  //   }
  // })

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem("lifetracker_token")
      
      if(token !== "undefined" && token){
        
        const decodedToken = jwtDecode(token)
        setUsername(decodedToken.username)

        if(decodedToken.exp * 1000 > Date.now()){
          console.log("User exists! Logging in...")
          handleLogin()
        }
        else {
        handleLogout()
        }
      }
    }
    console.log("Checking if the user is in a session...")
    checkLoggedIn()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      console.log(data)
      if (data) setAppState((appState) => ({...appState, user: data.user}))
      if (error) setError(error)
    }
    const token = localStorage.getItem("lifetracker_token")
    if (token !== "undefined" && token) {
      apiClient.setToken(token)
      console.log("success! token exists")
      fetchUser()
    }
  }, [])


  const handleLogout = () => {
    console.log("Logging out")
    localStorage.removeItem("lifetracker_token")
    setAppState((appState) => ({...appState, loginStatus: false}))
  }

  const handleLogin = () => {
    setAppState((appState) => ({...appState, loginStatus: true}))
  }

  return (
    <div className="app">
      {/* routes to pages on site */}
    <BrowserRouter>
    <Navbar appState={appState} handleLogout={handleLogout} handleLogin={handleLogin}/>
        <Routes>
          <Route path="/" element={<>  <LandingPage appState={appState} /></>} />
          <Route path="/login" element={<> <LoginPage setAppState={setAppState} appState={appState}/></>} />
          <Route path="/register" element={<RegistrationPage setAppState={setAppState}/>} />
          <Route path="/activity" element={<ActivityPage  appState={appState} />} />
          <Route path="/sleep" element={<SleepPage  appState={appState} />} />
          <Route path="/exercise" element={<ExercisePage  appState={appState} />} />
          <Route path="/nutrition/*" element={<NutritionPage  appState={appState} />} />
          <Route path="/*" element={<> <NotFound /></>} />
      </Routes>
      </BrowserRouter>
      <footer>
        <h3>Author: Marley Burrows</h3>
      </footer>
      </div>
  )
}

export default App

// [ ] Build the `App` component to:
//   - [X] Be wrapped by an element with the class name of `app`
//   - [X] Contain the routes for the app
//   - [X] Render the `Navbar` component on every route
//   - [X] Render a `BrowserRouter` component that contains a `Routes` component with the following routes:
//     - [X] `/` - Render the `Landing` component
//     - [X] `/login` - Render the `LoginPage` component
//     - [X] `/register` - Render the `RegistrationPage` component
//     - [ ] `/activity` - Render the `ActivityPage` component **only** if the user is logged in,
//           otherwise it renders the `AccessForbidden` component
//     - [ ] `/nutrition/*` - Render the `NutritionPage`component **only** if the user is logged in, 
//            otherwise it renders the`AccessForbidden` component
//     - [X] `*` - Anything else renders the `NotFound` component

// Update the `App` component to manage authentication state:
// - [ ] Create a state variable called `appState` with a function 
// called `setAppState` to update that state.
//   - [ ] Initialize `appState` with an object containing properties 
//   like `user`, `isAuthenticated`, `nutrition`, `sleep`, and `exercise`.
// - [ ] Implement a `useEffect` hook to fetch the user data.
//   - [ ] Define an asynchronous function named `fetchUser` to fetch the user data.
//     - [ ] Inside the `fetchUser` function, retrieve a token from `localStorage` using 
//     `localStorage.getItem("lifetracker_token")`
//     - [ ] Call the `setToken` function from the `apiClient.js` file.
//     - [ ] Make an API call to fetch user data using the `fetchUser` function from the `apiClient.js` 
//     file and extract the `data` from the response.
//     - [ ] If `data` is not null and not undefined, update the component's state using the `setAppState` 
//     function. Pass a callback to `setAppState` that takes the previous state and returns a new state object.
//     - [ ] In the callback, use the spread operator (`...`) to copy the previous state's properties to the 
//     new state object.
//     - [ ] Assign the following properties from the `data` object to the new state object:
//       - [ ] `user`
//       - [ ] `token`
//     - [ ] Assign at least **one** of the following properties from the `data` object to the new state object:
//       - [ ] `nutrition`
//       - [ ] `exercise`
//       - [ ] `sleep`
//     - [ ] Call the `setAppState` with a new state object to update the component's state.
//     - [ ] Outside the `fetchUser` function, call `fetchUser` to trigger the initial data fetch when the 
//     component mounts.
//     - [ ] The effect should be triggered whenever the value of `appState.isAuthenticated` changes.
