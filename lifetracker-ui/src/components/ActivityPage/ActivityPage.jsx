import * as React from "react";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

export default function ActivityPage ({appState}) {
    return (
        <ActivityFeed appState={appState}/>
    )
}











// - [ ] Build the **`ActivityPage`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `activity-page`
//   - [ ] Take the `appState` and `setAppState` as props and extract all the necessary data from it.
//   - [ ] If the `isProcessing` flag is `true`, it should render the `Loading` component.
//   - [ ] If the `isProcessing` flag is `false`, it should render the `ActivityFeed` 
// component and pass it the appropriate props.