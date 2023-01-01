import React, { Fragment, useState } from 'react'

const RH3 = ({ setRHFull }) => {
    const [imgSrc, setImgSrc] = useState("rh3.jpg");

    const handleClick = () => {
        setRHFull({
            "id": 3
        });
    }

    return (
        <Fragment>
            <a-image onClick={handleClick} src={imgSrc} width="8" height="15" position="4 -22 -30">
            </a-image>
        </Fragment>
    )
}

export default RH3