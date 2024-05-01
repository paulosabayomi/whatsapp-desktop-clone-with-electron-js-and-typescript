import React from "react";
import ChatHeadListHeader from "./ChatHeadListHeader";
import SearchBox from "./SearchBox";
import { ChatHead } from "../../shared/ReUseables";
import { ReactComponent as PadlockIcon } from "../../../../assets/icons-svg/padlock.svg"
import { IChatHead } from "../../shared/types";
// @ts-ignore
import contacts from "../../shared/contacts";
import { useParams } from "react-router-dom";

const ChatHeadList = React.memo((props: any) => {
    const {conversationId} = useParams()

    React.useEffect(() => {
        console.log("conversation id", conversationId);
        
    }, [conversationId])
    
    return (
        <div className="route-comp-1 chat-head-list">
            <ChatHeadListHeader />
            <SearchBox />
            <div>
                {
                    contacts.map(contact => 
                        <ChatHead route="chat" data={contact} />
                    )
                }
                
            </div>

            <div className="encr-message">
                <PadlockIcon />
                Your personal messages are <span>end-to-end encrypted</span>
            </div>
        </div>
    )
})

export default ChatHeadList