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







// - [ ] Build the **`NutritionFeed`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `nutrition-feed`
//   - [ ] Receive **at least** the following props:
//     - [ ] `nutritions` - an array of `nutrition` items
//   - [ ] If the `nutritions` array has no items in it, render an empty message that says `Nothing here yet` inside an element with the class name of `empty-message`
//   - [ ] If the `nutritions` array does have items in it:
//     - [ ] For each item in the `nutritions` array, it should render a `NutritionCard` component
