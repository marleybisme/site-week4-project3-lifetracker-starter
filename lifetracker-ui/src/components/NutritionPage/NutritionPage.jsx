import NutritionForm from "../NutritionForm/NutritionForm"
import { useState } from "react"
import "./NutritionPage.css"
import NutritionFeed from "../NutritionFeed/NutritionFeed"

export default function NutritionPage ({setAppState, appState}) {
    const [addNew, setAddNew] = useState(false)
    
    const handleAddNew = () => {
        setAddNew(true)
    }
    return (
        <>
        <div className="record-container">
        <button onClick={handleAddNew} className="record">Record New Nutrition</button>
        </div>
        {appState.loginStatus ? (
            <div>
                {addNew ? (
                <NutritionForm setAddNew={setAddNew} setAppState={setAppState} appState={appState}/>
                ) : (
                <NutritionFeed appState={appState}/>
                )}
            {/* ternary operator for add new button
             if button is pressed, remove nutrition feed . once save button is pressed, show nutrition feed under <add item> button again*/}
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
