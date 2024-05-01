import React from "react";
import ChatPageHeader from "./ChatPageHeader";
import ChatBox from "./ChatBox";
import ChatPageCenter from "./ChatPageCenter";

const ChatPage = React.memo((props: any) => {
    return (
        <div className="chat-page">
            <ChatPageHeader />
            <ChatPageCenter />
            <ChatBox />
        </div>
    )
})

export default ChatPage