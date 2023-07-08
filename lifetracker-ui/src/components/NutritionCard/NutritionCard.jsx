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
