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

const SettingsList = React.memo((props: any) => {
    
    return (
        <div className="route-comp-1 settings-list">
            <ContentListHeader />
            <div className="create-call">
                <div className="create-call-inner settings">
                    <div>
                        <WhatsAppWithBg />
                    </div>
                    <div>
                        <div className="title">Paulos Ab</div>
                        <div>Hey there! I am using WhatsApp.</div>
                    </div>
                </div>
            </div>

            <div className="px-3 mt-4">
                <ListGroup>
                    <ListItem 
                        title="Account"
                        icon={<KeyIcon />}
                        style={{fontSize: "80%"}}
                     />
                    <ListItem 
                        title="Privacy"
                        icon={<PadlockIcon />}
                        style={{fontSize: "80%"}}
                     />
                    <ListItem 
                        title="Chats"
                        icon={<WhatsAppWithBg />}
                        style={{fontSize: "80%"}}
                        route="/settings/chat-settings/"
                     />
                    <ListItem 
                        title="Notification"
                        icon={<NotificationIcon />}
                        style={{fontSize: "80%"}}
                     />
                </ListGroup>
            </div>
        </div>
    )
})

export default SettingsList