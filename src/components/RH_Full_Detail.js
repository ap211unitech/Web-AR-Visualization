import React, { Fragment, useEffect, useState } from 'react'

const RH_Full_Detail = ({ RHFull: { id } }) => {
    const [imgSrc, setImgSrc] = useState(null);
    const [w, setW] = useState("0");
    const [h, setH] = useState("0");

    useEffect(() => {
        setImgSrc(null); setW(0); setH(0);
        if (id) {
            setImgSrc(`rh${id} full detail.png`);
            if (id == 1) {
                setW(12); setH(30);
            }
            else if (id == 2) {
                setW(14); setH(26);
            }
            else if (id == 3) {
                setW(14); setH(36);
            }
            else if (id == 4) {
                setW(12); setH(36);
            }
        }
    }, [id])

    return (
        <Fragment>
            {imgSrc ?
                <a-image src={imgSrc} width={w} height={h} position={id < 3 ? "-70 -2 -30" : "-70 -6 -30"}>
                </a-image>
                : null
            }
        </Fragment>
    )
}

export default RH_Full_Detail