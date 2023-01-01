import React, { Fragment, useState } from 'react'

const Title = () => {
    const [imgSrc, setImgSrc] = useState("rh_title.jpg");
    return (
        <Fragment>
            <a-image src={imgSrc} width="24" height="1.1" position="0 -12 -30">
            </a-image>
        </Fragment>
    )
}

export default Title