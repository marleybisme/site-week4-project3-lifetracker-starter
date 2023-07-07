import * as React from "react";
import "./ActivityFeed.css"
export default function ActivityFeed ({appState}) {
    let totalCals = 0
    appState.nutrition?.map((nutritionItem) => {
        let itemCals = nutritionItem.calories * nutritionItem.quantity
        totalCals = totalCals + itemCals
    }   
    )
    // // calculates # of days to be used for averageDailyCals
    let startDay = new Date(appState.nutrition[0].created_at);
    let endDay = new Date(appState.nutrition[appState.nutrition.length - 1].created_at);
    let numDays = Math.floor((endDay - startDay) / (1000 * 3600 * 24));
    
    let averageDailyCals = totalCals
    if(numDays){ averageDailyCals = totalCals / numDays} 
    return (
        <>
        {appState.loginStatus ? (
            <div className="activity-feed">
                <h1>Activity Feed</h1>
                <div className="card-content">
            <div className="activity-info">
              <span className="activity-label">Average Daily Calories</span>
              <span className="activity-value">{averageDailyCals}</span>
            </div>
        </div>
            </div>
        ) : (
            <div>
                <h1>You must be logged in to view Activity content.</h1>
            </div>
        )}
        </>
    )
}












// - [ ] Build the **`ActivityFeed`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `activity-feed`
//   - [ ] Accept **at least** the following props:
//     - [ ] `totalCaloriesPerDay` - an array of items containing summary data about the total calories consumed per day
//     - [ ] `avgCaloriesPerCategory` - an array of items containing summary data about the average calories consumed per category
//     - [ ] Any other props as needed
//   - [ ] Inside an element with the class name of `per-category`, it should:
//     - [ ] Render the text: `"Average Calories Per Category` inside an `h4` element
//     - [ ] Take the first `6` or less items in the `avgCaloriesPerCategory` array and render a `SummaryStat` component for each item.
//       - [ ] Pass the calories **rounded down to one decimal place** as the `stat` prop
//       - [ ] Pass the string of `calories` as the `label` prop
//       - [ ] Pass the `category` as the `substat` prop
//   - [ ] Inside an element with the class name of `per-day`, it should:
//     - [ ] Render the text: `"Total Calories Per Day` inside an `h4` element
//     - [ ] For each item in the `totalCaloriesPerDay` array, render a `SummaryStat` component.
//       - [ ] Pass the calories **rounded down to the nearest whole number** as the `stat` prop
//       - [ ] Pass the string of `calories` as the `label` prop
//       - [ ] Pass the `date` in the format `dd/mm/yyyy` - example: `07/02/2022` - as the `substat` prop
