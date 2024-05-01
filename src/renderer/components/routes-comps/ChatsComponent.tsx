import React from "react";
import ChatHeadList from "../chat-comps/ChatHeadList";
import MainChatDisplay from "../chat-comps/MainChatDisplay";

const ChatComponent = React.memo((props: any) => {
    return (
        <div className="route-component">
            <ChatHeadList />
            <MainChatDisplay />
        </div>
    )
});

export default ChatComponent;