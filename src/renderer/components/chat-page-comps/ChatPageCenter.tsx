import React from "react";
import { ReactComponent as PadlockIcon } from "../../../../assets/icons-svg/padlock.svg"
import { ChatBubble } from "../../shared/ReUseables";
import { useAppSelector } from "../../shared/hooks";
import { useParams } from "react-router-dom";

const ChatPageCenter = React.memo((props: any) => {
    const chatsMessages = useAppSelector(state => state.main.chats)
    const {conversationId} = useParams()
    const user_details = useAppSelector(state => state.main.user_datails);
    const containerRef = React.useRef<any>()

    React.useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [conversationId])

    return (
        <div ref={containerRef} className="chat-page-center">
            <div className="d-flex justify-content-center mt-3">
                <div className="chat-page-enc-text">
                    <PadlockIcon />
                    Messages and calls are end-to-end encrypted. No one outside
                    of this chat, not even WhatsApp, can read or listen to them. 
                    <span>Click to learn more</span>
                </div>
            </div>

            <div>
                {
                    chatsMessages.filter(chat => chat.conversation_id == conversationId as unknown as number).map(chat => 
                        <ChatBubble  chat={chat} sent={chat.user_id == user_details.id} />
                    )
                }
            </div>

        </div>
    )
});

export default ChatPageCenter