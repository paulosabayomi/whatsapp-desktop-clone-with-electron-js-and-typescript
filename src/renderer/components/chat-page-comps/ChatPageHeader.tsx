import React from "react";
import {ReactComponent as VideoIcon} from '../../../../assets/icons-svg/video.svg'
import {ReactComponent as CallIcon} from '../../../../assets/icons-svg/call-27.svg'
import {ReactComponent as SearchIcon} from '../../../../assets/icons-svg/search.svg'
import {ReactComponent as MuteIcon} from '../../../../assets/icons-svg/Icon (2).svg'
import {ReactComponent as StarredIcon} from '../../../../assets/icons-svg/Icon (3).svg'
import {ReactComponent as DownloadIcon} from '../../../../assets/icons-svg/Icon (4).svg'
import {ReactComponent as PadlockIcon} from '../../../../assets/icons-svg/Icon (5).svg'
import {ReactComponent as PlusIcon} from '../../../../assets/icons-svg/plus.svg'
import { ListGroup, ListItem } from "../../shared/ReUseables";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { setShowDropdown } from "../../shared/rdx-slice";
import { useParams } from "react-router-dom";
import contacts from "../../shared/contacts";

const ChatPageHeader = React.memo((props: any) => {
    const dispatch = useAppDispatch();
    const {conversationId} = useParams() // added after the tutorial
    const other_user_details = contacts.find(contact => contact.id == conversationId  as unknown as number)

    const handleShowDropdown = React.useCallback((e: any) => {
        e.stopPropagation();
        dispatch(setShowDropdown(true))
    }, []);

    return (
        <div className="chat-page-header">
            <div onClick={handleShowDropdown}>
                <div>
                    {/* Added after the tutorial */}
                    <img src={other_user_details?.profileImage} alt="" />
                    {/* added after the tutorial */}
                    <DropdownEl data={other_user_details} />
                </div>
                <div>
                    {/* Added after the tutorial */}
                    <div>{other_user_details?.name}</div>
                    <div>last seen yesterday at 17:53</div>
                </div>
            </div>

            <div className="icon-container">
                <div><VideoIcon /></div>
                <div><CallIcon className="smaller" /></div>
                <div><SearchIcon className="smaller" /></div>
            </div>
        </div>
    )
});

const DropdownEl = React.memo((props: any) => {
    const shouldShow = useAppSelector(state => state.main.showDropdown);
    const dispatch = useAppDispatch()
    const dropdownRef = React.useRef<any>()

    React.useEffect(() => {
        document.onclick = (e) => {
            const targetEl = e.target as HTMLElement
            if (!targetEl.classList.contains('.profile-dropdown') || dropdownRef.current.querySelector('.'+targetEl.classList[0]) == null) {
                dispatch(setShowDropdown(false));
            }
        }
    }, [dropdownRef.current])

    return (
        <div ref={dropdownRef} className={shouldShow ? "profile-dropdown show" : "profile-dropdown"}>
            <div className="profile-dropdown-inner">
                <div className="first">
                    <div>
                        {/* added after the tutorial */}
                        <img src={props.data.profileImage} />
                    </div>
                    <div>
                        {/* added after the tutorial */}
                        {props.data.name}
                    </div>
                    <div className="phone">
                        +234 1234 567 8901
                    </div>
                </div>

                <div className="second">
                    <div>
                        <CallIcon className="smaller" />
                        <div>
                            Audio
                        </div>
                    </div>
                    <div>
                        <VideoIcon />
                        <div>
                            Video
                        </div>
                    </div>
                    <div>
                        <SearchIcon className="smaller" />
                        <div>
                            Search
                        </div>
                    </div>
                </div>

                <div className="third px-2">
                    <div className="mb-3">
                        <ListGroup>
                            <ListItem 
                                icon={<StarredIcon />} 
                                title="Starred Messages"
                                isRoute={true}
                            />
                        </ListGroup>
                    </div>
                    
                    <div className="mb-3">
                        <ListGroup>
                            <ListItem 
                                icon={<MuteIcon />} 
                                title="Mute"
                            />
                            <ListItem 
                                icon={<DownloadIcon />} 
                                title="Save to Downloads"
                            />
                        </ListGroup>
                    </div>
                    
                    <div className="mb-3">
                        <ListGroup>
                            <ListItem 
                                icon={<PadlockIcon />} 
                                title="Encryption"
                                isRoute
                                info="Messages and calls are end-to-end encrypted. Click to verify"
                            />
                        </ListGroup>
                    </div>
                    
                </div>

                <div className="fourth px-2 mb-3">
                    <div>
                        No Groups in Common
                    </div>

                    <ListItem 
                        icon={<PlusIcon className="has-stroke" />} 
                        title="Create Group with Paulos Ab"
                        style={{color: "var(--app-light-green) !important"}}
                    />
                </div>

                <div className="fifth mb-3 px-2">
                    <ListGroup>
                        <ListItem 
                            title="Share Contact"
                        />
                        <ListItem 
                            title="Export Chat"
                        />
                        <ListItem 
                            title="Clear Chat"
                        />
                    </ListGroup>
                </div>

                <div className="sixth mb-3 px-2">
                    <ListGroup>
                        <ListItem 
                            title="Block Paulos Ab"
                        />
                        <ListItem 
                            title="Report Paulos Ab"
                        />
                    </ListGroup>
                </div>

            </div>


        </div>
    )
})

export default ChatPageHeader;