import React from "react";
import { ReactComponent as CallAdd } from '../../../../assets/icons-svg/Call add.svg'
import { ReactComponent as FilterIcon } from '../../../../assets/icons-svg/filter-circle-outline.svg'

const ContentListHeader = React.memo((props: any) => {
    return (
        <div className="header-main chat-head-list">
            <div>Calls</div>
            <div className="icons">
                <div>
                    <CallAdd className="fill" />
                </div>
                <div>
                    <FilterIcon className="stroke" />
                </div>
            </div>
        </div>
    )
});

export default ContentListHeader;