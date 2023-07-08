import * as React from "react";
import "./ActivityFeed.css";

export default function ActivityFeed({ appState }) {
  let averageDailyCals = 0;
  let totalMins = 0;
  let maxCals = 0;
  let averageIntensity = 0;
  const userNutrition = appState.nutrition?.filter((item) => item.user_id === appState.user.id);
  const userExercise = appState.exercise?.filter((item) => item.user_id === appState.user.id);

  if (userNutrition && userNutrition.length > 0) {
    let totalCals = 0;
    userNutrition?.map((nutritionItem) => {
      let itemCals = nutritionItem.calories * nutritionItem.quantity;
      totalCals = totalCals + itemCals;
    });

    let startDay = new Date(userNutrition[0].created_at);
    let endDay = new Date(userNutrition[userNutrition.length - 1].created_at);
    let numDays = Math.floor((endDay - startDay) / (1000 * 3600 * 24));

    averageDailyCals = totalCals;
    if (numDays) {
      averageDailyCals = totalCals / numDays;
    }
    maxCals = Math.max(...userNutrition?.map((item) => item.calories));
  }

  if (userExercise && userExercise.length > 0) {
    totalMins = userExercise?.reduce((total, exerciseItem) => total + exerciseItem.duration, 0);
    averageIntensity = userExercise?.reduce((total, exerciseItem) => total + exerciseItem.intensity, 0) / userExercise.length;
  }

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
  );
}
