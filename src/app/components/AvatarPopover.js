"use client"
import Image from "next/image"
import { Popover, Divider } from "antd"
import { BlueTick, SettingsIcon, LogoutIcon } from "../../constants/svg"
import AvatarImg from "../../assets/images/avatar/avatar.png"
import UserImg from "../../assets/images/avatar/user_img.png"


export default function AvatarPopover() {
    return (
        <div className='avatar__image'>
            <Popover
                trigger="click"
                overlayStyle={{ width: '251px' }}
                placement="bottomLeft"
                content={
                    <div className="inner__avatar__popover">
                        <div className="head">
                            <div className="user__image">
                                <Image src={UserImg} alt="avatar" />
                            </div>
                            <div className="user__description">
                                <div>
                                    <h1>Novel Saymonds </h1>
                                    <BlueTick />
                                </div>
                                <p>San Antonio, CA</p>
                            </div>
                        </div>
                        <div className="footer">
                            <div>
                                <SettingsIcon /> <p>Settings</p>
                            </div>
                            <hr className="divider"/>
                            <div>
                                <LogoutIcon /> <p>Logout</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <Image src={AvatarImg} alt="avatar" className='user__image' />
            </Popover>
        </div>
    )
}
