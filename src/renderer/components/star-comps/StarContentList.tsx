import React from "react";
import ContentListHeader from "./StarContentListHeader";
import { ChatHead } from "../../shared/ReUseables";
import { ReactComponent as LinkIcon } from "../../../../assets/icons-svg/link.svg"
import { IChatHead } from "../../shared/types";
// @ts-ignore
import contacts from "../../shared/contacts";
import { useParams } from "react-router-dom";

const StarContentList = React.memo((props: any) => {
    return (
        <div className="route-comp-1 chat-head-list">
            <ContentListHeader />

            <div className="call-content-second" style={{height: "60%", margin: 0, justifyContent: 'center'}}>
                <div>
                    No Starred Messages
                </div>
                <div>
                    Right click on any message and select star, so you can easily 
                    find it later.
                </div>

            </div>
        </div>
    )
})

export default StarContentList