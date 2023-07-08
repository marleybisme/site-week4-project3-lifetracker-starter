import * as React from "react";
import "./LandingPage.css"

export default function LandingPage({appState}) {
  return (
   
    <div className="landing-page">
       {appState.loginStatus ? (
        <div>
          <div className="content">
        <div className="hero">
          <div className="img-container">
            <img src="https://livehealthymag.com/wp-content/uploads/2021/02/fitness-trackers-1280x854.jpg"></img>
          </div>
          <div className="hero-text">
            <h1>Welcome Back, {appState.user.firstname }</h1>
            <h2>Helping you take back control of your world.</h2>
            <h3><a href="\activity">View Activity</a></h3>
          </div>
        </div>
          </div>
          </div>
       ) : (
        <div>
            <div className="content">
        <div className="hero">
          <div className="img-container">
            <img src="https://livehealthymag.com/wp-content/uploads/2021/02/fitness-trackers-1280x854.jpg"></img>
          </div>
          <div className="hero-text">
            <h1>LifeTracker</h1>
            <h2>Helping you take back control of your world.</h2>
            <h3><a href="\register">Create an Account Now!</a></h3>
          </div>
        </div>
        </div>
        </div>
       )
       }
      
    <div className="tiles">
    <div>
      <h2>Fitness</h2>
      <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325142/woman-exercising.jpg"></img>
    </div>
    <div>
      <h2>Food</h2>
      <img src="https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/how-to-eat-healthy.jpg?v=1611987977"></img>
    </div>
    <div>
      <h2>Rest</h2>
      <img src="https://www.shape.com/thmb/mOlpBVlpjx69nM1kT7yGXfm2lww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sleep-socks-AdobeStock_159023575-ee9bc8c26dce4328950fa661517d9d47.jpeg"></img>
    </div>
    <div>
      <h2>Planning</h2>
      <img src="https://images.pexels.com/photos/210660/pexels-photo-210660.jpeg?cs=srgb&dl=pexels-picjumbocom-210660.jpg&fm=jpg"></img>
    </div>
    

    </div>
      </div>
  )
}
