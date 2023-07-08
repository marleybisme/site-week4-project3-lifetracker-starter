import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./ExerciseFeed.css"
export default function ExerciseFeed ({ appState }) {
    const id = appState.user.id
    return(
        <div className="exercise-feed">
            <div className="feed-content">
  {appState.exercise
    .filter((exerciseItem) => exerciseItem.user_id === id)
    .map((exerciseItem) => {
      const createdAt = new Date(exerciseItem.created_at);
      const formattedDate = createdAt.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      });

      return (
        <ExerciseCard
          exerciseItem={exerciseItem}
          formattedDate={formattedDate}
        />
      );
    })}
</div>


    </div>
    )
}
