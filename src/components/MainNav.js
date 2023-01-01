import React, { Fragment, useState } from 'react'

const MainNav = () => {
    const [imgSrc, setImgSrc] = useState("nav_buttons.jpg");

    const click = (e) => {
        console.log(e, "Main Nav clicked");
    }

    return (
        <Fragment>
            <a-image src={imgSrc} onClick={click} width="30" height="8" position="0 7 -30">
            </a-image>

            {/* Display Gif Image in A-Frame */}
            {/* <a-entity geometry="primitive:plane;" material="shader:gif;src:url(bday.gif);color:white;opacity:1"></a-entity> */}

        </Fragment>
    )
}

export default MainNav