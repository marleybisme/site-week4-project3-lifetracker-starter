import NutritionCard from "../NutritionCard/NutritionCard";
import "./NutritionFeed.css"
export default function NutritionFeed ({ appState }) {
    const id = appState.user.id
    return(
        <div className="nutrition-feed">
            <div className="feed-content">
  {appState.nutrition
    .filter((nutritionItem) => nutritionItem.user_id === id)
    .map((nutritionItem) => {
      const createdAt = new Date(nutritionItem.created_at);
      const formattedDate = createdAt.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      });

      return (
        <NutritionCard
          nutritionItem={nutritionItem}
          formattedDate={formattedDate}
        />
      );
    })}
</div>


    </div>
    )
}
