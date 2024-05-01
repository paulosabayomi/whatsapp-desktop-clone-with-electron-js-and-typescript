import React from "react";
import { ReactComponent as PlusIcon } from '../../../../assets/icons-svg/plus.svg'
import { ReactComponent as FileIcon } from '../../../../assets/icons-svg/sticker.svg'
import { ReactComponent as SmileyFaceIcon } from '../../../../assets/icons-svg/grinning-face.svg'
import { ReactComponent as MicIcon } from '../../../../assets/icons-svg/mic.svg'
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { updateChatBubble } from "../../shared/rdx-slice";
import { IChatBubble } from "../../shared/types";
import { useParams } from "react-router-dom";
import Contacts from "../../shared/contacts";

const ChatBox = React.memo((props: any) => {
    const dispatch = useAppDispatch();
    const chats = useAppSelector(state => state.main.chats)
    const user_details = useAppSelector(state => state.main.user_datails);
    const {conversationId} = useParams()

    const handleSendMessage = React.useCallback((e: any) => {
        e.preventDefault()
        if (e.key.toLowerCase() == 'enter') {
            const chatBubble: IChatBubble = {
                message: e.target.innerText,
                time: "05:55",
                user_id: user_details.id,
                id: chats.filter(chat => chat.conversation_id == conversationId as unknown as number).length + 1,
                conversation_id: conversationId as unknown as number,
            }
            dispatch(updateChatBubble(chatBubble));
            if (chats.filter(chat => chat.conversation_id == conversationId as unknown as number).length % 3 === 0) {
                const chatBubbleResp: IChatBubble = {
                    message: "I knew that lol, and you're very funny :D",
                    time: "05:55",
                    user_id: Contacts.find(contact => contact.id == conversationId as unknown as number)!.id,
                    id: chats.filter(chat => chat.conversation_id == conversationId as unknown as number).length + 1,
                    conversation_id: conversationId as unknown as number,
                }
                dispatch(updateChatBubble(chatBubbleResp));                
            }
            setTimeout(() => {
                document.querySelector('.chat-page-center')!.scrollTop = document.querySelector('.chat-page-center')?.scrollHeight as number
            }, 300);
            e.target.innerText = ""
        }
    }, [chats, conversationId]);

    // indexedDB
    // websockets
    // a temporary remote server database

    return (
        <div className="chat-box-container">
            <div>
                <PlusIcon className="bigger" />
            </div>
            <div className="input-container">
                <div className="input" contentEditable='true' onKeyUp={handleSendMessage} />
                <div>
                    <FileIcon />
                    <SmileyFaceIcon />
                </div>
            </div>
            <div>
                <MicIcon />
            </div>
        </div>
    )
})

export default ChatBox;