import { useState } from "react"
import apiClient from "../../../../services/apiClient"

export default function NutritionForm ({appState}) {
    const [form, setForm] = useState({
        name: "",
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
        console.log("form data:", form)
        const res = await apiClient.addNutrition({
            name: form.name,
            category: form.category,
            quantity: form.quantity,
            calories: form.calories,
            image_url: form.image_url
        })
      }

    return(
        <div className="nutrition-form">
            <form onSubmit={handleOnSubmit}>
        <div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"onChange={handleOnInputChange} value={form.name} required />
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
            <label htmlFor="imageUrl">URL for Image</label>
            <input type="text" onChange={handleOnInputChange} value={form.image_url} id="imageUrl" name="imageUrl" />
            </div>
            <button type="submit">Save</button>
        </div>
        </form>
    </div>
    )
}










// - [ ] Build the **`NutritionForm`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `nutrition-form`
//   - [ ] Render an input element for the following fields:
//     - [ ] `name` - name of the nutrition item (defaults to an empty string)
//     - [ ] `calories` - number of calories in the nutrition item (defaults to 1)
//     - [ ] `imageUrl` - the `url` of an image to show for this nutrition item (defaults to an empty string)
//     - [ ] `category` - the category that this nutrition item belongs to, like fruit, meat, soda, snack, nuts, etc. (defaults to an empty string)
//   - [ ] Each `input` element in the form should have a class name of `form-input` and should have the following props set:
//     - [ ] `name` - the `name` of the `input` field being rendered (`name`, `calories`, `imageUrl`, `category`)
//     - [ ] `type` - the type of the `input` element (`text`, `email`, `number`, etc.)
//     - [ ] `value` - the current value of the `input` element
//     - [ ] `onChange` - the `onChange` handler function
//   - [ ] Gracefully handle errors:
//     - [ ] If any of the required fields are left blank, there should be an error message inside of an element with the class name of `error` indicating which fields are required.
//     - [ ] If the user has attempted to create a nutrition entry and gotten a `400` or `422` error, then that message should be displayed inside an element with the class name of `error`
//   - [ ] There should be a `button` element with the class name of `submit-nutrition`:
//     - [ ] Contain the text `"Save"`
//     - [ ] When clicked, it should call a function that creates a new nutrition entry
//   - [ ] After the form has been successfully submitted:
//     - [ ] Ensure that the new nutrition entry is stored in the `nutrition` context's `nutritions` array and is displayed in the `NutritionFeed` component
//     - [ ] Fetch the `activity` data again so that new summary stats will be calculated