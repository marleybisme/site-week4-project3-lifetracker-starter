import React from "react";
import { Link } from "react-router-dom";
import "./Navlinks.css";

export default function Navlinks({ appState, handleLogout }) {
  return (
    <div className="navcontent">
      <ul className="pagelinks">
        <li>
          <Link to="/activity">Activity</Link>
        </li>
        <li>
          <Link to="/nutrition">Nutrition</Link>
        </li>
        <li>
          <Link to="/sleep">Sleep</Link>
        </li>
        <li>
          <Link to="/exercise">Exercise</Link>
        </li>
      </ul>
      <div className="logo">
        <Link to="/">
          <img src="https://icons.veryicon.com/png/o/food--drinks/fruits-4/banana-50.png" alt="banana icon" />
        </Link>
      </div>
      <ul className="pagelinks">
        {appState.loginStatus ? (
          <li>
            <Link to="/" onClick={handleLogout}>Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
