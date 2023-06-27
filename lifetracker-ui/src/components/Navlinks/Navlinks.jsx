
// - [ ] Build the **`NavLinks`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `nav-links`
//   - [ ] Render a `Link` element from `react-router-dom` for:
//     - [ ] The `/activity` route with a label of `Activity`.
//     - [ ] The `/nutrition` route with a label of `Nutrition`.
//     - [ ] A route for any other resource page
//   - [ ] If a valid user is logged in, it should render an element with the class name of `logout-button` that calls the `logoutUser` function when clicked.
//     - [ ] The `logoutUser` function should remove the `lifetracker_token` from local storage and refresh the page so that all user data is reset.
//   - [ ] If no valid user is logged in:
//     - [ ] Render a `Link` element that redirects to the `/login` route with the label `Login`
//     - [ ] Render a `Link` element that redirects to the `/register` route with the label `Sign Up`