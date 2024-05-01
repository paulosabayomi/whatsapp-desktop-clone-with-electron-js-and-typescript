import React from "react";
import { ReactComponent as EditIcon } from '../../../../assets/icons-svg/square-pencil.svg'
import { ReactComponent as FilterIcon } from '../../../../assets/icons-svg/filter-circle-outline.svg'

const ChatHeadListHeader = React.memo((props: any) => {
    return (
        <div className="header-main chat-head-list">
            <div>Chats</div>
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

export default ChatHeadListHeader;