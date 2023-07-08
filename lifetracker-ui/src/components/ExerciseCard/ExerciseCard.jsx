import "./ExerciseCard.css"
export default function ExerciseCard ({ exerciseItem, formattedDate }) {
    return(
        <div className="exercise-card">
        <div className="card-content">
          <div className="food-info">
            <div className="food-img">
              <img src='https://us.123rf.com/450wm/marsono/marsono1901/marsono190100126/114779097-vector-object-and-icons-for-sport-label-gym-badge-fitness-design-vector.jpg?ver=6' />
            </div>
            <div className="food-details">
              <h1>{exerciseItem.foodname}</h1>
              <span className="badge">{exerciseItem.category}</span>
            </div>
          </div>
          <div className="exercise-info">
            <div className="exercise-item">
              <span className="exercise-label">Duration</span>
              <span className="exercise-value">{exerciseItem.duration}</span>
            </div>
            <div className="exercise-item">
              <span className="exercise-label">Intensity</span>
              <span className="exercise-value">{exerciseItem.intensity}</span>
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
