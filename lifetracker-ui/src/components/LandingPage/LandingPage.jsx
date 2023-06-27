import * as React from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css"

export default function LandingPage() {

  return (
    <div className="landing-page">
      <div className="content">
      <div className="hero">
        <img src="https://livehealthymag.com/wp-content/uploads/2021/02/fitness-trackers-1280x854.jpg"></img>
    <h1>LifeTracker</h1>
    <h2>Helping you take back control of your world.</h2>
    <h3><a href="\register">Create an Account Now!</a></h3>
    </div>
      </div>
      </div>
  )
}








// - [ ] Build the **`LandingPage`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `landing-page`
//   - [ ] Render an element with the class name of `hero`
//     - [ ] Inside it, display a large hero image using an `img` element with the class name of `hero-img`
//     - [ ] Render a brief blurb on what this application is about inside an element with the class name of `cta`
//   - [ ] Allow unauthenticated access