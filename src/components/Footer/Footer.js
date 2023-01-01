import React, { Fragment, useState } from 'react'

const Footer = () => {
    const [footer1, setFooter1] = useState('footer_1.jpg');
    const [footer2, setFooter2] = useState('footer_2.jpg');

    return (
        <Fragment>
            <a-image src={footer1} width="30" height="1.8" position="0 -62 -30">
            </a-image>
            <a-image src={footer2} width="30" height="13" position="0 -70 -30">
            </a-image>
        </Fragment>
    )
}

export default Footer