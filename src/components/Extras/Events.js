import React, { Fragment, useState } from 'react'
import Events_Read_More from '../Events_Read_More';

const Events = () => {
    const [imgSrc, setImgSrc] = useState("events.jpg");
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        console.log("Events Read more Clicked");
        setIsClicked(!isClicked);
    }

    return (
        <Fragment>
            {isClicked ?
                <Events_Read_More /> :
                null
            }
            <a-image src={imgSrc} onClick={handleClick} width="7" height="20" position="8 -48 -30">
            </a-image>
        </Fragment>
    )
}

export default Events