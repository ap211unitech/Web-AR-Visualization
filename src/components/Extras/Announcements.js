import React, { Fragment, useState } from 'react'
import Announcements_Read_More from '../Announcements_Read_More'

const Announcements = () => {
    const [imgSrc, setImgSrc] = useState("annoucements.jpg");
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        console.log("Announcements Read more Clicked");
        setIsClicked(!isClicked);
    }

    return (
        <Fragment>
            {isClicked ?
                <Announcements_Read_More /> :
                null
            }
            <a-image src={imgSrc} onClick={handleClick} width="7" height="20" position="0 -48 -30">
            </a-image>
        </Fragment>
    )
}

export default Announcements