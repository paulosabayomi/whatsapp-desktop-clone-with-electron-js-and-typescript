import React from "react";
import ChatHeadList from "../chat-comps/ChatHeadList";
import MainChatDisplay from "../chat-comps/MainChatDisplay";
import ArchiveHeadList from "../archive-comps/ArchiveHeadList";
import MainAchiveChatDisplay from "../archive-comps/MainAchiveChatDisplay";

const ArchiveComponent = React.memo((props: any) => {
    return (
        <div className="route-component">
            <ArchiveHeadList />
            <MainAchiveChatDisplay />
        </div>
    )
});

export default ArchiveComponent;