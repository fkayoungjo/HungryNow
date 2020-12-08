import React from 'react';
import { Button, Jumbotron, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';




export const Users = (props) => {

  return (

     <div className="profile">
    {props.users.map(user =>  <ul>

      <Row><Col><img  src={user.avatar}
      alt="profile" width="75" height="75"/></Col><Col><h3>{user.username}</h3></Col></Row>

      </ul>)}
  </div>

  );
}



export default Users;
