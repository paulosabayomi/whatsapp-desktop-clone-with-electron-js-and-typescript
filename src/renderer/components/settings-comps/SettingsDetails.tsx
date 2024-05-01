import React from "react";
import ContentListHeader from "./SettingsContentListHeader";
import { ChatHead, ListGroup, ListItem } from "../../shared/ReUseables";
import { ReactComponent as LinkIcon } from "../../../../assets/icons-svg/link.svg"
import { IChatHead } from "../../shared/types";
// @ts-ignore
import contacts from "../../shared/contacts";
import { useParams } from "react-router-dom";

import { ReactComponent as WhatsAppWithBg } from "../../../../assets/icons-svg/whatsapp-with-bg.svg"
import { ReactComponent as KeyIcon } from "../../../../assets/icons-svg/Icon (6).svg"
import { ReactComponent as PadlockIcon } from "../../../../assets/icons-svg/Icon (5).svg"
import { ReactComponent as NotificationIcon } from "../../../../assets/icons-svg/Icon (7).svg"

const SettingsDetails = React.memo((props: any) => {
    
    return (
        <div className="route-comp-1 settings-list" style={{width: '100%', border: 'none'}}>
            <ContentListHeader title="Chats"  />

            <div className="px-3 mt-5">
                <ListItem 
                    title="Chat Wallpaper"
                    style={{fontSize: "80%"}}
                    isRoute
                    />
            </div>
            <div className="px-3 mt-5">
                <ListItem 
                    title="Appearance"
                    style={{fontSize: "80%"}}
                    isRoute
                    route="/settings/appearance/"
                    />
            </div>
            <div className="px-3 mt-5">
                <ListItem 
                    title="Save to Downloads"
                    style={{fontSize: "80%"}}
                    isRoute
                    route="/settings/chat-settings/"
                    />
            </div>
            <div className="px-3 mt-5">
                <ListItem 
                    title="Export Chat"
                    style={{fontSize: "80%"}}
                    isRoute
                    />
            </div>

            <div className="px-3 mt-5">
                <ListGroup>
                    <ListItem 
                        title="Archive All Chats"
                        style={{fontSize: "80%"}}
                     />
                    <ListItem 
                        title="Clear All Chats"
                        style={{fontSize: "80%"}}
                     />
                    <ListItem 
                        title="Delete All Chats"
                        style={{fontSize: "80%"}}
                        route="/settings/chat-settings/"
                     />
                </ListGroup>
            </div>
        </div>
    )
})

export default SettingsDetails