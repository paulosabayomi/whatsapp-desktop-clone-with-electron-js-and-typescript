import React from "react";
import { ReactComponent as CallAdd } from '../../../../assets/icons-svg/Call add.svg'
import { ReactComponent as IconBack } from '../../../../assets/icons-svg/Icon (2).svg'

const SettingsContentListHeader = React.memo((props: any) => {
    return (
        <div className="header-main settings-list">
            <div>{props.title || 'Settings'}</div>
        </div>
    )
});

export default SettingsContentListHeader;