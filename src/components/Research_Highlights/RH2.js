import React, { Fragment, useState } from 'react'

const RH2 = ({ setRHFull }) => {
    const [imgSrc, setImgSrc] = useState("rh2.jpg");

    const handleClick = () => {
        setRHFull({
            "id": 2
        });
    }

    return (
        <Fragment>
            <a-image onClick={handleClick} src={imgSrc} width="8" height="15" position="-5 -22 -30">
            </a-image>
        </Fragment>
    )
}

export default RH2