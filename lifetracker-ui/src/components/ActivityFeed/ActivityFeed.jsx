import * as React from "react";
import "./ActivityFeed.css"
export default function ActivityFeed ({appState}) {
    // calculating Average Daily calories
    let totalCals = 0
    appState.nutrition?.map((nutritionItem) => {
        let itemCals = nutritionItem.calories * nutritionItem.quantity
        totalCals = totalCals + itemCals
    }   
    )
    let startDay = new Date(appState.nutrition[0].created_at);
    let endDay = new Date(appState.nutrition[appState.nutrition.length - 1].created_at);
    let numDays = Math.floor((endDay - startDay) / (1000 * 3600 * 24));
    
    let averageDailyCals = totalCals
    if(numDays){ averageDailyCals = totalCals / numDays} 

    // calculating total exercise minutes
    let totalMins = 0
    appState.exercise?.map((exerciseItem) => {
        totalMins = totalMins + exerciseItem.duration
    } )

    //calculating average intensity
    let totalIntensity = 0
    appState.exercise?.map((exerciseItem) => {
        totalIntensity = totalIntensity + exerciseItem.intensity
    }   
    )
    let averageIntensity = totalIntensity / appState.exercise.length

    const maxCals = Math.max(...appState.nutrition?.map(item => item.calories))
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
            <div className="activity-info">
              <span className="activity-label">Total Exercise Minutes</span>
              <span className="activity-value">{totalMins}</span>
            </div>
        </div>
        <h2>More Stats</h2>
            <div className="activity-info">
              <span className="activity-label">Max Calories In One Meal</span>
              <span className="activity-value">{maxCals}</span>
            </div>
            <div className="activity-info">
              <span className="activity-label">Average Workout Intensity</span>
              <span className="activity-value">{averageIntensity}</span>
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
