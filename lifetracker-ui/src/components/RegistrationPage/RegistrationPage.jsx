import * as React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function RegistrationPage({ setAppState }) {

  return (
    <div className="registration-page">
    <RegistrationForm setAppState={setAppState}/>
      </div>
  )
}

export default RegistrationPage
