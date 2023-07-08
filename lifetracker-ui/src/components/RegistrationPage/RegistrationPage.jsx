import * as React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function RegistrationPage({ setAppState , appState}) {

  return (
    <div className="registration-page">
    <RegistrationForm appState={appState} setAppState={setAppState}/>
      </div>
  )
}

export default RegistrationPage
