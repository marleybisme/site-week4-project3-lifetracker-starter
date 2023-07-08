
import ExerciseForm from "../ExerciseForm/ExerciseForm"
import { useState } from "react"
import "./ExercisePage.css"
import ExerciseFeed from "../ExerciseFeed/ExerciseFeed"

export default function ExercisePage ({setAppState, appState}) {
    const [addNew, setAddNew] = useState(false)
    
    const handleAddNew = () => {
        setAddNew(true)
    }
    return (
        <>
        <div className="record-container">
        <button onClick={handleAddNew} className="record">Record New Exercise</button>
        </div>
        {appState.loginStatus ? (
            <div>
                {addNew ? (
                <ExerciseForm setAddNew={setAddNew} setAppState={setAppState} appState={appState}/>
                ) : (
                <ExerciseFeed appState={appState}/>
                )}
            {/* ternary operator for add new button
             if button is pressed, remove nutrition feed . once save button is pressed, show nutrition feed under <add item> button again*/}
            </div>
        ) : (
            <div>
                <h1>You must be logged in to view Exercise content.</h1>
            </div>
        )}
        </>
    )
}