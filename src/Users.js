import React from 'react';
import { Button, Jumbotron, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import white from './white.png';




export const Users = (props) => {

  return (

     <div className="profile">
     <div>
     <Jumbotron className="jumbotron" style={{backgroundImage: `url(${white})`, backgroundSize: 'cover'}}>
     <h3> Click to view Profile </h3>
    {props.users.map(user =>  <ul>

      <Row><Col><img  src={user.avatar}
      alt="profile" width="100" height="100"/></Col><Col><h3>{user.username}</h3></Col></Row>

      </ul>)}
      </Jumbotron >
      </div>
  </div>

  );
}



export default Users;
