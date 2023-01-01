import React, { Fragment } from 'react'
import MainNav from '../MainNav';
import Navtop from './Navtop';

const Navbar = () => {
  return (
    <Fragment>
      <Navtop />
      <MainNav />
    </Fragment>
  )
}

export default Navbar