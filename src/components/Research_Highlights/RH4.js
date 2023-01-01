import React, { Fragment, useState } from 'react'

const RH4 = ({ setRHFull }) => {
    const [imgSrc, setImgSrc] = useState("rh4.jpg");

    const handleClick = () => {
        setRHFull({
            "id": 4
        });
    }

    return (
        <Fragment>
            <a-image onClick={handleClick} src={imgSrc} width="8" height="15" position="13 -22 -30">
            </a-image>
        </Fragment>
    )
}

export default RH4