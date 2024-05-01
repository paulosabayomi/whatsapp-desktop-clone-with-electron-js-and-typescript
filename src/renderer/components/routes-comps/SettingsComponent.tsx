import React from "react";
import SettingsList from "../settings-comps/SettingsList";
import MainSettingsContentDisplay from "../settings-comps/MainSettingsContentDisplay";

const SettingsComponent = React.memo((props: any) => {
    return (
        <div className="route-component">
            <SettingsList />
            <MainSettingsContentDisplay />
        </div>
    )
})

export default SettingsComponent;