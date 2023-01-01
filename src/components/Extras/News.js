import React, { Fragment, useState } from 'react'

const News = () => {
    const [imgSrc, setImgSrc] = useState("news.gif");

    return (
        <Fragment>
            {/* Display Gif Image in A-Frame */}
            <a-entity geometry="primitive:plane;width:2;height:3;" position="0 0 0" material="shader:gif;src:url(news.gif);color:white;opacity:1"></a-entity>
            {/* <a-image src={imgSrc} width="7" height="20" position="8 0 -30">
            </a-image> */}
        </Fragment>
    )
}

export default News