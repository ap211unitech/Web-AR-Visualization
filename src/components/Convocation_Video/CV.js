import React, { Fragment, useState } from 'react'

const CV = () => {
    const [imgSrc, setImgSrc] = useState("convocation_video.jpg");
    const [isClicked, setIsClicked] = useState(false);

    const click = (e) => {
        console.log(e, "Convo. Video clicked");
        // setIsClicked(!isClicked);
        window.open("https://youtu.be/d0tTzBZHJ7w", "_blank");
    }

    return (
        <Fragment>
            {/* <a-video
                id="metaversecities"
                preload="auto"
                src="https://cdn.glitch.global/177c9f2c-1e41-49a4-8ad6-ff3212c3b8e0/screen-capture%20(2).mp4?v=1672151626346"
                loop="true"
                crossorigin="anonymous"
                width="20"
                height="10"
                webkit-playsinline
            ></a-video> */}

            {/* <a-video src="https://cdn.glitch.global/177c9f2c-1e41-49a4-8ad6-ff3212c3b8e0/screen-capture%20(2).mp4?v=1672151626346" width="22" height="17" position="0 -8 -30">
            </a-video> */}
            {!isClicked ?
                <a-image src={imgSrc} onClick={click} width="24" height="13" position="0 -4 -30">
                </a-image>
                :
                <Fragment>
                    {/* <a-video  width="24" height="13" position="0 -4 -30" src="https://res.cloudinary.com/dquxwox28/video/upload/v1648011905/samples/elephants.mp4" id="myvideo"></a-video>
                    <a-entity id="stopbutton" geometry="primitive: box" material="color: red"
                        event-set__1="_event: mousedown; _target: #myvideo; pause()"></a-entity> */}
                    <a-video onClick={click} src="conv.mp4" width="24" height="13" autoplay position="0 -4 -30">
                    </a-video>
                </Fragment>
            }
        </Fragment>
    )
}

export default CV