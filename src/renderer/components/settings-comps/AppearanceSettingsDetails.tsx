import React from "react";
import ContentListHeader from "./SettingsContentListHeader";
import { ChatHead, ListGroup, ListItem } from "../../shared/ReUseables";
import { ReactComponent as LinkIcon } from "../../../../assets/icons-svg/link.svg"
import { IChatHead, TApperanceMode } from "../../shared/types";
// @ts-ignore
import contacts from "../../shared/contacts";
import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as WhatsAppWithBg } from "../../../../assets/icons-svg/whatsapp-with-bg.svg"
import { ReactComponent as KeyIcon } from "../../../../assets/icons-svg/Icon (6).svg"
import { ReactComponent as PadlockIcon } from "../../../../assets/icons-svg/Icon (5).svg"
import { ReactComponent as AngleRight } from "../../../../assets/icons-svg/angle-right (1).svg"

const AppearanceSettingsDetails = React.memo((props: any) => {
    const navigate = useNavigate();
    const [appMode, setAppMode] = React.useState<TApperanceMode>('light')
    const isDarkMode = document.documentElement.classList.contains('dark');

    const store_name = "color_mode"

    React.useLayoutEffect(() => {
        const isDarkMode2 = document.documentElement.classList.contains('dark');
        setAppMode(isDarkMode2 ? 'dark' : 'light');
    }, [isDarkMode])

    const handleSetColorMode = React.useCallback((mode: TApperanceMode) => {
        mode == 'dark' ? document.documentElement.classList.add('dark') :
        document.documentElement.classList.remove('dark')

        window.electron.ipcRenderer.setDBItem(store_name, mode)
        setAppMode(mode);
    }, [])
    
    return (
        <div className="route-comp-1 settings-list" style={{width: '100%', border: 'none'}}>
            <div className="back-icon">
                <AngleRight  onClick={() => navigate(-1)}/>
            </div>


            <div className="px-3 mt-3">
                <div className="list-title">
                    Appearance
                </div>
                <ListGroup>
                    <div>
                        <ListItem 
                            title="Same as System"
                            style={{fontSize: "80%"}}
                        />
                    </div>
                    <div onClick={() => handleSetColorMode('light')}>
                        <ListItem
                            title="Light Mode"
                            className={appMode == 'light' ? "selected" : ''}
                            style={{fontSize: "80%"}}
                        />
                    </div>
                    <div onClick={() => handleSetColorMode('dark')}>
                        <ListItem 
                            title="Dark Mode"
                            style={{fontSize: "80%"}}
                            className={appMode == 'dark' ? "selected" : ''}
                        />
                    </div>
                </ListGroup>
            </div>
        </div>
    )
})

export default AppearanceSettingsDetails