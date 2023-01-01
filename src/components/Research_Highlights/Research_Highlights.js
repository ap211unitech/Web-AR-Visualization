import React, { Fragment } from 'react'
import RH1 from './RH1'
import RH2 from './RH2'
import RH3 from './RH3'
import RH4 from './RH4'
import RH_Button from './RH_Button'
import Title from './Title'

const Research_Highlights = ({ setRHFull }) => {
    return (
        <Fragment>
            <a-entity position="-43 20 0">
                <Title />
                <RH1 setRHFull={setRHFull} />
                <RH2 setRHFull={setRHFull} />
                <RH3 setRHFull={setRHFull} />
                <RH4 setRHFull={setRHFull} />
                <RH_Button />
            </a-entity>
        </Fragment>
    )
}

export default Research_Highlights