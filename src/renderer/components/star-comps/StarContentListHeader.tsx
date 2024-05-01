import React from "react";
import { ReactComponent as CallAdd } from '../../../../assets/icons-svg/Call add.svg'
import { ReactComponent as FilterIcon } from '../../../../assets/icons-svg/filter-circle-outline.svg'

const StarContentListHeader = React.memo((props: any) => {
    return (
        <div className="header-main chat-head-list">
            <div>Starred Messages</div>
        </div>
    )
});

export default StarContentListHeader;