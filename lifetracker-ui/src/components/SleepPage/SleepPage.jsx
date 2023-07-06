import * as React from "react";

export default function SleepPage ({appState}) {
    return (
        <>
        {appState.loginStatus ? (
            <div>
                
            </div>
        ) : (
            <div>
                <h1>You must be logged in to view Sleep content.</h1>
            </div>
        )}
        </>
    )
}