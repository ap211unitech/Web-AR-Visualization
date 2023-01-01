import React, { Fragment, useState } from 'react'

const Announcements_Read_More = () => {
    const [imgSrc, setImgSrc] = useState("annoucements read more.jpg");

    return (
        <Fragment>
            <a-image src={imgSrc} width="20" height="40" position="26 -58 -30">
            </a-image>
        </Fragment>
    )
}

export default Announcements_Read_More

