import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function NutritionPage ({appState}) {
    return (
        <>
        {appState.loginStatus ? (
            <div>
                
            </div>
        ) : (
            <div>
                <h1>You must be logged in to view Nutrition content.</h1>
            </div>
        )}
        </>
    )
}









// - [ ] Build the **`NutritionPage`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `nutrition-page`
//   - [ ] Take the `appState` and `setAppState` as props and extract all the necessary data from it.
//   - [ ] Render a nested `Routes` component from `react-router-dom`.
//     - [ ] There should be multiple `Route` components:
//       - [ ] The `/nutrition` route should render the `NutritionOverview` component
//       - [ ] The `/nutrition/create` route should render the `NutritionNew` component
//       - [ ] The `/nutrition/id/:nutritionId` should render the `NutritionDetail` component
//       - [ ] Any other route should render the `NotFound` component
