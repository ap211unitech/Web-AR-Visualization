import React, { Fragment, useState } from 'react'

const Events_Read_More = () => {
    const [imgSrc, setImgSrc] = useState("events read more.png");

    return (
        <Fragment>
            <a-image src={imgSrc} width="20" height="40" position="26 -58 -30">
            </a-image>
        </Fragment>
    )
}

export default Events_Read_More


