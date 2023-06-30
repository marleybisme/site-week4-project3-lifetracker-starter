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







// - [ ] Build the **`RegistrationPage`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `registration-page`
//   - [ ] Using either a custom hook, context, or manually handled state, check to see if a user is already logged in
//     - [ ] If the user is already logged in, it should redirect them to the `/activity` page
//     - [ ] If no user is authenticated, it should render the `RegistrationForm` component and pass it any props it needs
