import React, { Fragment, useState } from 'react'

const RH1 = ({ setRHFull }) => {
    const [imgSrc, setImgSrc] = useState("rh1.jpg");

    const handleClick = () => {
        setRHFull({
            "id": 1
        });
    }

    return (
        <Fragment>
            <a-image src={imgSrc} onClick={handleClick} width="8" height="15" position="-14 -22 -30">
            </a-image>
        </Fragment>
    )
}

export default RH1