import React from "react";
import { Outlet } from "react-router-dom";

const MainContentDisplay = React.memo((props: any) => {
    return (
        <div className="route-comp-2 main-chat-display">
            <Outlet />
        </div>
    )
})

export default MainContentDisplay