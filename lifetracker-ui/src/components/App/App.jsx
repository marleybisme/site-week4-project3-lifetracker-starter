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
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import { useState } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode"



function App() {
  const [appState, setAppState] = useState(() => {
    const storedAppState = localStorage.getItem("appState");
    return storedAppState ? JSON.parse(storedAppState) : {
      user: {},
      loginStatus: false,
      nutrition: [],
      sleep: [],
      exercise: []
    };
  });

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  const [username, setUsername] = useState()
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)


  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem("lifetracker_token")
      
      if(token !== "undefined" && token){
        
        const decodedToken = jwtDecode(token)
        setUsername(decodedToken.username)

        if(decodedToken.exp * 1000 > Date.now()){
          handleLogin()
        }
        else {
        handleLogout()
        }
      }
    }
    checkLoggedIn()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("lifetracker_token")
      if (token !== "undefined" && token) {
        apiClient.setToken(token)
      }  
      const { data, error } = await apiClient.fetchUserFromToken()
      
      if (data) setAppState((appState) => ({...appState, user: data.user}))
      if (error) setError(error)
    }
    fetchUser()
  }, [])


  const handleLogout = () => {
    localStorage.removeItem("lifetracker_token")
    setAppState((appState) => ({...appState, user:null, loginStatus: false}))
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
          <Route path="/activity" element={<ActivityPage appState={appState} />} />
          <Route path="/exercise" element={<ExercisePage setAppState={setAppState} appState={appState} />} />
          <Route path="/nutrition/*" element={<NutritionPage setAppState={setAppState} appState={appState} />} />
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
