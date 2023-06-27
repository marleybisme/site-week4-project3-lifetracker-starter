






// - [ ] Build the **`NutritionDetail.jsx`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `nutrition-detail`
//   - [ ] Leverage the `useParams` hook from `react-router-dom` to extract the `nutritionId` param from the URL
//   - [ ] When the component is mounted to the screen...
//     - [ ] It should make a `GET` request to the `/nutrition/:nutritionId` endpoint with the `axios.get` method.
//     - [ ] The `:nutritionId` part of the request should be replaced with the `nutritionId` pulled from the URL.
//     - [ ] When the initial request is loading, it should render an `h1` element with the class name of `loading` and contain the text `"Loading..."`
//     - [ ] Store the `nutrition` received by the request in state and then render a `NutritionCard` component for that nutrition.
//     - [ ] If no `nutrition` is found with that `id`, it should render the `NotFound` component
