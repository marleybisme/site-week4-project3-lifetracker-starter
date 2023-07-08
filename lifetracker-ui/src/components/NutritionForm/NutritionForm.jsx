import { useState } from "react"
import apiClient from "../../../../services/apiClient"
import './NutritionForm.css'

export default function NutritionForm ({setAddNew, setAppState, appState}) {
    const [form, setForm] = useState({
       foodname: "",
        category: "",
        quantity: 0,
        calories: 0,
        image_url: ""
      })

      const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
    const handleOnSubmit = async (event) => {
        event.preventDefault()
        setAddNew(false)
        const res = await apiClient.enterNutrition({
            credentials: appState.user,
            nutritionEntry: {
            foodname: form.foodname,
            category: form.category,
            quantity: form.quantity,
            calories: form.calories,
            image_url: form.image_url
        }
        })

        const {data, error} = res
            if(data?.status === 400){
        setErrors((e) => ({...e, nutrition: data.message}))
        }
        if (data) {
            setAppState((prevState) => ({
              ...prevState,
              nutrition: [...prevState.nutrition, data.nutrition]
            }));
          }
      }

    return(
        <div className="nutrition-form">
            <form onSubmit={handleOnSubmit}>
        <div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="foodname"onChange={handleOnInputChange} value={form.foodname} required />
            </div>
            <div>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={handleOnInputChange} value={form.category} required>
                <option value="">Select a category</option>
                <option value="snack">Snack</option>
                <option value="beverage">Beverage</option>
                <option value="food">Food</option>
            </select>
            </div>
            <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" onChange={handleOnInputChange} value={form.quantity} id="quantity" name="quantity" min="1" required />
            </div>
            <div>
            <label htmlFor="calories">Calories</label>
            <input type="number" onChange={handleOnInputChange} value={form.calories} id="calories" name="calories" min="0" required />
            </div>
            <div>
            <label htmlFor="image_url">URL for Image</label>
            <input type="text" onChange={handleOnInputChange} value={form.image_url} id="image_url" name="image_url" w/>
            </div>
            <button type="submit">Save</button>
        </div>
        </form>
    </div>
    )
}
