import "./NutritionCard.css"
export default function NutritionCard ({ nutritionItem, formattedDate }) {
    return(
        <div className="nutrition-card">
        <div className="card-content">
          <div className="food-info">
            <div className="food-img">
              <img src={nutritionItem.image_url ? nutritionItem.image_url : 'https://media.istockphoto.com/id/184592327/photo/empty-plate.jpg?s=170667a&w=0&k=20&c=bqE_g8-UXrq5T9naKZR2UIoX5FJU9zgk9hJP3grxVhc='} />
            </div>
            <div className="food-details">
              <h1>{nutritionItem.foodname}</h1>
              <span className="badge">{nutritionItem.category}</span>
            </div>
          </div>
          <div className="nutrition-info">
            <div className="nutrition-item">
              <span className="nutrition-label">Calories</span>
              <span className="nutrition-value">{nutritionItem.calories}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Quantity</span>
              <span className="nutrition-value">{nutritionItem.quantity}</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Created</span>
              <span className="nutrition-value">{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    )      
}









// - [ ] Build the **`NutritionCard`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `nutrition-card`
//   - [ ] Accept **at least** the following props:
//     - [ ] `nutrition` - should be a nutrition entry object containing the following attributes:
//       - [ ] `imageUrl` - (not required)
//       - [ ] `name` - (required)
//       - [ ] `calories` - (required)
//       - [ ] `category` - (required)
//       - [ ] `createdAt` - (required)
//   - [ ] Render the `name` of the `nutrition` entry inside an element with the class name of `nutrition-name`
//   - [ ] If the `nutrition` entry has a valid `imageUrl` attribute, render an `img` element with the class name of `nutrition-image` and use that `imageUrl` as its `src`
//   - [ ] Render the `calories` attribute of the `nutrition` entry inside an element with the class name of `nutrition-calories`
//   - [ ] Render the `category` attribute of the `nutrition` entry inside an element with the class name of `nutrition-category`
//   - [ ] Render the `createdAt` attribute of the `nutrition` entry in the format `dd/mm/yyyy` - example: `07/02/2022` - inside an element with the class name of `nutrition-date`.

//   - [ ] **DO THE SAME FOR ANY OTHER RESOURCE THAT IS IN THE APPLICATION**
//     - [ ] Choose whatever resources you want!
