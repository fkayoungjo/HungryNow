import React, {Component} from 'react';
import { NavLink, Row, Col } from 'reactstrap';
import heart from './heart.png';


class Results extends Component {
    state = {
      isSorted: false
    }

    handleClick = (e) => {
      this.setState({isSorted: !this.state.isSorted })
    }

    render () {
      let list = [...this.props.results.hits].filter(recipe => !recipe.recipe.label.toLowerCase().includes('asparagus'))

      if(this.state.isSorted) {
        list.sort(function(a, b) {
          var nameA = a.recipe.label.toUpperCase();
          var nameB = b.recipe.label.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }


          return 0;
        })
      }
      return (
    <div>
      <button onClick={(e) => this.handleClick(e)} >Sort</button>
    {list.map(result => <ul key={result.recipe.label}>

    <Row><NavLink  href={result.recipe.url} target="_blank" className="navitem"><Col xs="auto"><img src={result.recipe.image} alt="link" width="75" height="75"/></Col><Col xs="auto"><h6>{result.recipe.label}</h6></Col></NavLink><Col xs="auto"><img src={heart} alt="heart" width="30" height="30" name={result.recipe.label} id={result.recipe.url} onClick={(e) => this.props.saveFavortie(e)}/></Col></Row>
    </ul>)}
    </div>
  );
}
}



  export default Results;
