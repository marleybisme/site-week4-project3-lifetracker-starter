






// - [ ] Build the **`ProtectedRoute`** component to:
//   - [ ] Take the `appState` and `setAppState` as props and extract all the necessary data from it.
//   - [ ] Accept a component as the `element` prop and render that component.
//   - [ ] If the application isn't currently loading and no user is found, render the `LoginPage` component instead of rendering the route the user intended to go to. This way, we can ensure that only authenticated users can access the provided component.
//   - [ ] Any unauthenticated user should be shown the `LoginPage` component with a message indicating that they need to authenticate first
//   - [ ] Update the `LoginPage` component so that it accepts a `message` prop that is displayed in the login form - if it exists.
//   - [ ] Make sure to protect the entire `ActivityPage` component route and the `NutritionPage` component route (along with any other private resource pages). Don't protect the `LandingPage` component or the `LoginPage` and `RegistrationPage` components, as they should be public.
