import React, { Fragment, useState } from 'react'

const RH_Button = () => {
    const [imgSrc, setImgSrc] = useState("rh_button.jpg");
    const [fullList, setFullList] = useState(null);

    const handleClick = () => {
        setFullList('RH_Arch_List.jpg');
    }

    return (
        <Fragment>
            <a-image src={imgSrc} onClick={handleClick} width="6" height="2" position="14 -34 -30">
            </a-image>
            {fullList ?
                <a-image src={fullList} width="34" height="17" position="0 -45 -30">
                </a-image>
                :
                null
            }
        </Fragment>
    )
}

export default RH_Button