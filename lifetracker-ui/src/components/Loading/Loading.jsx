import * as React from "react";

function Loading() {

  return (
    <div className="loading-message">
    <h1>Loading...</h1>
      </div>
  )
}

export default Loading


// - [ ] Build the **`Loading`** component to:
//   - [ ] Render JSX that is wrapped by an element with 
//   the class name of `loading`
//   - [ ] Render an element with the class name of `loading-message` 
//   that contains the text `"Loading"`