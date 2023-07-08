import { useState } from "react"
import apiClient from "../../../../services/apiClient"
import './ExerciseForm.css'

export default function ExerciseForm ({setAddNew, setAppState, appState}) {
    const [form, setForm] = useState({
       exname: "",
        category: "",
        duration: 0,
        intensity: 0,
      })

      const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
    const handleOnSubmit = async (event) => {
        event.preventDefault()
        setAddNew(false)
        
        const res = await apiClient.enterExercise({
            credentials: appState.user,
            exerciseEntry: {
            exname: form.exname,
            category: form.category,
            duration: form.duration,
            intensity: form.intensity,
        }
        })
        const {data, error} = res
            if(data?.status === 400){
        setErrors((e) => ({...e, exercise: data.message}))
        }
        if (data) {
            setAppState((prevState) => ({
              ...prevState,
              exercise: [...prevState.exercise, data.exercise]
            }));
          }
      }

    return(
        <div className="exercise-form">
            <form onSubmit={handleOnSubmit}>
        <div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="exname"onChange={handleOnInputChange} value={form.exname} required />
            </div>
            <div>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={handleOnInputChange} value={form.category} required>
                <option value="">Select a category</option>
                <option value="run">Run</option>
                <option value="bike">Bike</option>
                <option value="lift">Lift</option>
                <option value="swim">Swim</option>
                <option value="sports">Sports</option>
            </select>
            </div>
            <div>
            <label htmlFor="duration">Duration</label>
            <input type="number" onChange={handleOnInputChange} value={form.duration} id="duration" name="duration" min="1" required />
            </div>
            <div>
            <label htmlFor="intensity">Intensity</label>
            <input type="number" onChange={handleOnInputChange} value={form.intensity} id="intensity" name="intensity" min="0" required />
            </div>
            
            <button type="submit">Save</button>
        </div>
        </form>
    </div>
    )
}
