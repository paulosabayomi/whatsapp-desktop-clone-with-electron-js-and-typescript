import React from "react";
import ChatHeadListHeader from "./StatusHeadListHeader";
import SearchBox from "./SearchBox";
import { ChatHead } from "../../shared/ReUseables";
import { ReactComponent as PadlockIcon } from "../../../../assets/icons-svg/padlock.svg"
import { IChatHead } from "../../shared/types";
// @ts-ignore
import contacts from "../../shared/contacts";
import { useParams } from "react-router-dom";

const StatusHeadList = React.memo((props: any) => {
    const {conversationId} = useParams()

    React.useEffect(() => {
        console.log("conversation id", conversationId);
        
    }, [conversationId])
    
    return (
        <div className="route-comp-1 chat-head-list">
            <ChatHeadListHeader />
            <SearchBox />
            <div>
                <div className="section-title">
                    Viewed Updates
                </div>

                <div className="status-head">
                    <div className="preview">
                        <span>.</span>
                    </div>

                    <div>
                        <div>Paulos Ab</div>
                        <div className="time">21h ago</div>
                    </div>

                </div>
            </div>

        </div>
    )
})

export default StatusHeadList