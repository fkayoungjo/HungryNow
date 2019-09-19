import React from 'react';
import { ListGroupItem } from 'reactstrap';
import minusfav from './minusfav.png';






export const Favorite = (props) => {

  return (
    <div >

          <ListGroupItem  tag="a" href={props.fav.url} target="_blank">{props.fav.label} <img src={minusfav} alt="minusfav" width="30" height="30"  id={props.fav.id} onClick={(e) => props.deleteFav(e)}/></ListGroupItem>

    </div>

  );
}




export default Favorite;
