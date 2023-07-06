import * as React from "react";

export default function ExercisePage ({appState}) {
    return (
        <>
        {appState.loginStatus ? (
            <div>
                
            </div>
        ) : (
            <div>
                <h1>You must be logged in to view Exercise content.</h1>
            </div>
        )}
        </>
    )
}