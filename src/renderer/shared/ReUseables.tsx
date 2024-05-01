import React from "react";
import { Link, useNavigate, useNavigation, useParams, useRoutes } from "react-router-dom";
import { IChatBubble, IChatHead, IListItem } from "./types";
import { ReactComponent as SendCheckmarks } from '../../../assets/icons-svg/checkmark-double.svg'
import { ReactComponent as AngleRightIcon } from '../../../assets/icons-svg/angle-right (1).svg'

export const SidebarIcon = React.memo((props: any) => {
    return (
        <Link to={props.to}>
            <div className="sidebar-icon">
                {props.children}
            </div>
        </Link>
    )
});

export const ChatHead = React.memo(({data, route}: {data: IChatHead, route?: string}) => {
    const {conversationId} = useParams();
    React.useEffect(() => {
        console.log("conversationId33333", conversationId);
        
    }, [conversationId])
    return (
        <Link to={"/" + route + "/"+data.id} className={conversationId as unknown as number == data.id ? "chat-head-container active" : "chat-head-container"}>
            <div className="chat-head-inner">
                <div>
                    <img src={data.profileImage} />
                </div>
                <div className="chat-head-details">
                    <div>
                        <div className="user_name">{data.name}</div>
                        <div>Yesterday</div>
                    </div>
                    <div className="last-message">
                        {data.lastMessage}
                    </div>
                </div>
            </div>
        </Link>
    )
})

export const ChatBubble = React.memo(({chat, sent}: {chat: IChatBubble; sent: boolean}) => {
    return (
        // sent | incoming
        <div className={sent ? "chat-bubble-container sent" : "chat-bubble-container incoming"}>
            <div className="chat-bubble-inner">
                <div>{chat.message}</div>
                <div>
                    <span>05:08</span>
                    <SendCheckmarks />
                </div>
            </div>
        </div>
    )
})

export const ListItem = React.memo(({icon, title, isRoute, info, style, route, className}: IListItem) => {
    const navigate = useNavigate()
    return (
        <div className={`list-item ${className}`} style={style} onClick={() => route == undefined ? null : navigate(route)}>
            <div>
                {
                    icon &&
                    <div>
                        {icon}
                    </div>
                }
                <div>
                    <div>{title}</div>
                    <div className="info">
                        {info}
                    </div>
                </div>
            </div>
            {
                isRoute &&
                <div>
                    <AngleRightIcon className="no-fill" />
                </div>
            }
        </div>
    )
})

export const ListGroup = React.memo((props: any) => {
    return (
        <div className="list-group">
            {props.children}
        </div>
    )
})