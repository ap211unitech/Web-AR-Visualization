import React, { Fragment, useState } from 'react'

const Navtop = () => {
    const [imgSrc, setImgSrc] = useState("nav_top.jpg");

    const click = (e) => {
        console.log(e, "Nav Top clicked");
    }

    return (
        <Fragment>

            {/* <a-entity>
                <a-video src="video.mp4" width="16" height="9" position="0 0 -20" autoplay="true" loop="true">
                </a-video>
            </a-entity> */}
            {/* <a-entity>

                <a-video src="video.mp4" autoplay="true" loop="true" volume="0.5" />
            </a-entity> */}

            {/* <Entity> */}
            {/* <a-video
                src="video.mp4"
                // animation="true"
                autoplay loop="true"
            /> */}
            {/* </Entity> */}

            {/* <a-image src={"bday.gif"} width="10" height="10" position="0 2 -10" id="navigation top" >
            </a-image> */}

            <a-image src={imgSrc} onClick={click} width="30" position="0 12 -30" id="navigation top" >
            </a-image>
            {/* <a-entity
                cursor-listener
                event-set__click={{ _event: 'click', callback: click }}
            >
                <a-image cursor-listener src={imgSrc} width="30" position="0 5 -10" id="navigation top" >
                </a-image>
            </a-entity> */}
        </Fragment>
    )
}

export default Navtop