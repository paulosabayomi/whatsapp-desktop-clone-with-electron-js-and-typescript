import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainDisplay = React.memo((props: any) => {
    const navigate = useNavigate()
    const handleRouting = React.useCallback(() => {
        navigate('/chat')
    }, [])
    React.useEffect(() => {
        handleRouting()
    }, [])
    
    return (
        <div className="app-display">
            <Outlet />
        </div>
    )
})

export default MainDisplay;