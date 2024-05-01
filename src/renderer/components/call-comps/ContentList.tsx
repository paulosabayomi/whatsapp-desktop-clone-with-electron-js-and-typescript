import React from "react";
import ContentListHeader from "./ContentListHeader";
import { ChatHead } from "../../shared/ReUseables";
import { ReactComponent as LinkIcon } from "../../../../assets/icons-svg/link.svg"
import { IChatHead } from "../../shared/types";
// @ts-ignore
import contacts from "../../shared/contacts";
import { useParams } from "react-router-dom";

const ContentList = React.memo((props: any) => {
    const handleShowNativeModal = React.useCallback(() => {
        window.electron.ipcRenderer.showCallModal()
    }, []);
    return (
        <div className="route-comp-1 chat-head-list">
            <ContentListHeader />
            <div className="create-call" onClick={handleShowNativeModal}>
                <div className="create-call-inner">
                    <div>
                        <LinkIcon />
                    </div>
                    <div>
                        <div className="title">Create Call Link</div>
                        <div>Share a link for your WhatsApp call</div>
                    </div>
                </div>
            </div>

            <div className="call-content-second">
                <div>
                    Start a Video or Voice Call
                </div>
                <div>
                    Make calls to your WhatsApp contacts, including group calls.
                </div>

            </div>
        </div>
    )
})

export default ContentList