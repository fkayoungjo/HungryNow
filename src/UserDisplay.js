import React from 'react';
import { Button, Jumbotron, Col, Row, ListGroupItem, ListGroup } from 'reactstrap';
import white from './white.png';
import Favorite from './Favorite';



export const UserDisplay = (props) => {

  return (

    <div className="profile">
    <Jumbotron className="jumbotron" style={{backgroundImage: `url(${white})`, backgroundSize: 'cover'}}>
    <Row>
  <Col xs="6">
  <img  src={props.user.avatar}
  alt="profile" width="200" height="200"/>
  <h3>{props.user.username}</h3>
  <ListGroup flush>
  <ListGroupItem >{props.user.location}</ListGroupItem >
  <h4>About</h4>
<ListGroupItem >{props.user.bio}</ListGroupItem >
</ListGroup >
  </Col>
  <Col xs="6">
  <h4 id="favorites">Favorites</h4>
  <ListGroup flush>
  <p>Perform a search to add favorite</p>
  {props.userFavs.map(fav =>  <Favorite fav={fav} key={fav.id} deleteFav={props.deleteFav}/>)}
  </ListGroup>
  </Col>
  </Row>
  <Col sm="12" md={{ size: 6, offset: 5 }}>
  <Button onClick={props.logout}>Log Out </Button>
  </Col>
    </Jumbotron >
  </div>

  );
}



export default UserDisplay;
