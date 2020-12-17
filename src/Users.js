import React from 'react';
import { Button, Jumbotron, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import white from './white.png';




export const Users = (props) => {

  return (

     <div className="profile">
     <Jumbotron className="jumbotron" style={{backgroundImage: `url(${white})`, backgroundSize: 'cover'}}>
    {props.users.map(user =>  <ul>

      <Row><Col><img  src={user.avatar}
      alt="profile" width="100" height="100"/></Col><Col><h3>{user.username}</h3></Col></Row>

      </ul>)}
      </Jumbotron >
  </div>

  );
}



export default Users;
