import React from "react";
import ContentList from "../call-comps/ContentList";
import MainContentDisplay from "../call-comps/MainContentDisplay";

const CallsComponent = React.memo((props: any) => {
    return (
        <div className="route-component">
            <ContentList />
            <MainContentDisplay />
        </div>
    )
})

export default CallsComponent;