import React from "react";
import StarContentList from "../star-comps/StarContentList";
import StarMainContentDisplay from "../star-comps/StarMainContentDisplay";

const StarComponent = React.memo((props: any) => {
    return (
        <div className="route-component">
            <StarContentList />
            <StarMainContentDisplay />
        </div>
    )
});

export default StarComponent;