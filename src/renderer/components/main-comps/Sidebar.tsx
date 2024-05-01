import React from "react";
import { SidebarIcon } from "../../shared/ReUseables";

import { ReactComponent as ChatIcon } from '../../../../assets/icons-svg/chat-bubble-2.svg'
import { ReactComponent as CallIcon } from '../../../../assets/icons-svg/call-27.svg'
import { ReactComponent as StatusIcon } from '../../../../assets/icons-svg/Status.svg'
import { ReactComponent as ArchiveIcon } from '../../../../assets/icons-svg/archivebox-2.svg'
import { ReactComponent as StarIcon } from '../../../../assets/icons-svg/star-86.svg'
import { ReactComponent as SettingsIcon } from '../../../../assets/icons-svg/gear-66.svg'

const Sidebar = React.memo((props: any) => {
    return (
        <div className="app-sidebar">
            <div>
                <SidebarIcon to={'chat'}>
                    <ChatIcon />
                </SidebarIcon>
                <SidebarIcon to={'call'}>
                    <CallIcon />
                </SidebarIcon>
                <SidebarIcon to={'status'}>
                    <StatusIcon />
                </SidebarIcon>
                <hr className="separator" />
                <SidebarIcon to={'archive'}>
                    <ArchiveIcon />
                </SidebarIcon>
                <SidebarIcon to={'starred'}>
                    <StarIcon />
                </SidebarIcon>
            </div>
            <div>
                <SidebarIcon to={'settings'}>
                    <SettingsIcon />
                </SidebarIcon>
            </div>
        </div>
    )
})

export default Sidebar;