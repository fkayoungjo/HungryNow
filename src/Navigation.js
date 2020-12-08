import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profile from './profile.png';
import knifefork from './knifefork.png';
import search from './search.png';

export const Navigation = (props) => {

    return (
      <div>
        <Navbar fixed="top" className="header">
          <NavbarBrand href="/">HUNGRY <img src={knifefork} alt="knifefork" width="25" height="25"/> NOW</NavbarBrand>
          <Nav>
          <NavItem>
          <NavLink> {props.time} </NavLink>
          </NavItem>
            <NavItem>
              <NavLink href="/contactus">CONTACT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">USERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/friends">FRIENDS</NavLink>
            </NavItem>
            <NavItem>

              <NavLink href="/profile"><img src={profile} alt="profile" width="25" height="25"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search" className="navitem"><img src={search} alt="search" width="30" height="30"/> </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

export default Navigation;
