import React from 'react';
import { Button, Jumbotron, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';




export const Profile = (props) => {

  return (

    <div className="profile">
    {props.users.map(user =>  user.name)}
  </div>

  );
}



export default Profile;
