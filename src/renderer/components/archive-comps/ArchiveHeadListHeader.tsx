import React from "react";
import { ReactComponent as EditIcon } from '../../../../assets/icons-svg/square-pencil.svg'
import { ReactComponent as FilterIcon } from '../../../../assets/icons-svg/filter-circle-outline.svg'

const ArchiveHeadListHeader = React.memo((props: any) => {
    return (
        <div className="header-main chat-head-list">
            <div>Archive</div>
            <div className="icons">
                <div>
                    <EditIcon className="fill" />
                </div>
                <div>
                    <FilterIcon className="stroke" />
                </div>
            </div>
        </div>
    )
});

export default ArchiveHeadListHeader;