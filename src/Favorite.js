import React from 'react';
import { ListGroupItem, Row, Col } from 'reactstrap';
import minusfav from './minusfav.png';






export const Favorite = (props) => {

  return (
    <div >

          <Row><Col><ListGroupItem  tag="a" href={props.fav.url} target="_blank">{props.fav.label} </ListGroupItem></Col><Col><img src={minusfav} alt="minusfav" width="30" height="30"  id={props.fav.id} onClick={(e) => props.deleteFav(e)}/></Col></Row>

    </div>

  );
}




export default Favorite;
