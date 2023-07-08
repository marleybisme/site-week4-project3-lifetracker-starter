import "./ExerciseCard.css"
export default function ExerciseCard ({ exerciseItem, formattedDate }) {
    return(
        <div className="exercise-card">
        <div className="card-content">
          <div className="food-info">
            <div className="food-img">
              <img src={exerciseItem.image_url ? exerciseItem.image_url : 'https://media.istockphoto.com/id/184592327/photo/empty-plate.jpg?s=170667a&w=0&k=20&c=bqE_g8-UXrq5T9naKZR2UIoX5FJU9zgk9hJP3grxVhc='} />
            </div>
            <div className="food-details">
              <h1>{exerciseItem.foodname}</h1>
              <span className="badge">{exerciseItem.category}</span>
            </div>
          </div>
          <div className="exercise-info">
            <div className="exercise-item">
              <span className="exercise-label">Calories</span>
              <span className="exercise-value">{exerciseItem.calories}</span>
            </div>
            <div className="exercise-item">
              <span className="exercise-label">Quantity</span>
              <span className="exercise-value">{exerciseItem.quantity}</span>
            </div>
            <div className="exercise-item">
              <span className="exercise-label">Created</span>
              <span className="exercise-value">{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    )      
}
