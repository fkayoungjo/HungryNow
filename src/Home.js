import React from 'react';

import knifefork from './knifefork.png';
import { Button, NavLink } from 'reactstrap';




export const Home = (props) => {

  return (
        <div className="home">
          <h1 className="title">HUNGRY <img src={knifefork} alt="knifefork" width="65" height="65"/>NOW </h1>
          <p className="p">Quick and Easy Meals for those on the go!</p>
          <NavLink href="/search" className="navitem "><Button>Let's Eat! </Button></NavLink>
          </div>
  );
}



export default Home;
