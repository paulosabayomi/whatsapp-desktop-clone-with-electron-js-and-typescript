import React from "react";
import StatusHeadList from "../status-comps/StatusHeadList";
import StatusHeadListHeader from "../status-comps/StatusHeadListHeader";
import MainStatusDisplay from "../status-comps/MainStatusDisplay";

const StatusComponent = React.memo((props: any) => {
    return (
        <div className="route-component">
            <StatusHeadList />
            <MainStatusDisplay />
        </div>
    )
})

export default StatusComponent;