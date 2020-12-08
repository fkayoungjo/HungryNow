import React, {Component} from 'react';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Profile from './Profile.js';
import ContactUs from './ContactUs.js'
import Search from './Search.js';
import Users from './Users.js';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './actions/userActions.js';
import {Switch, Route, withRouter} from 'react-router-dom';
import plate from './plate.jpg';


class App extends Component {
  state = {
    time: null,
    hour: null,
    favorites: [],
    userFavs: [],
    users: []

  }

  componentDidMount() {
  this.getTime()
  this.props.getProfileFetch()
  this.getFavorites()
  this.getUserFavs()
  this.getUsers()
  }

  handleLogout = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push("/")
  }

  getTime = () => {
    var today = new Date();
    var minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    var timeNow = today.getHours() + ":" + minutes ;
      this.setState({
        time: timeNow,
        hour: today.getHours()
      })
  }

  saveFavortie = (e)=> {
    console.log(e.target.name, e.target.id, this.props.currentUser.id)
      fetch("http://localhost:3000/api/v1/favorites",{
        method: 'POST',
        body: JSON.stringify({
          label: e.target.name,
          user_id: this.props.currentUser.id,
          url: e.target.id

        }),
        headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
       }
      })
    .then(res=>res.json())
    .then(fav=>{
     let newArr=[...this.state.favorites, fav]
      this.setState({
        favorites: newArr
      })
  })
    }

  getFavorites = () => {
   let token = localStorage.getItem("token")
   if (token !== null ) {
   return fetch('http://localhost:3000/api/v1/favorites', {
   method: 'GET',
   headers: {
     "Content-Type": "application/json",
     Action: "application/json",
     Authorization: `Bearer ${token}`
   }
 })
 .then(res => res.json())
 .then(res => {
   this.setState({favorites: res})
 })
}
}

getUsers = () => {
 let token = localStorage.getItem("token")
 if (token !== null ) {
 return fetch('http://localhost:3000/api/v1/users', {
 method: 'GET',
 headers: {
   "Content-Type": "application/json",
   Action: "application/json",
   Authorization: `Bearer ${token}`
 }
})
.then(res => res.json())
.then(res => {
 this.setState({users: res})
})
}
}


 getUserFavs = () => {

   let token = localStorage.getItem("token")
   if (token !== null ) {
   return fetch("http://localhost:3000/api/v1/favorites",{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  .then(res=>res.json())
  .then(arrayOfFavorites=>{
    let myFavs= arrayOfFavorites.filter(favorite=>{
      return favorite.user_id === this.props.currentUser.id.toString()
    })

    this.setState({
    userFavs: myFavs
      })

    })

}
}

deleteFav = (e) => {
  let token = localStorage.getItem("token")
  if (token !== null ) {
   e.preventDefault()
   fetch(`http://localhost:3000/api/v1/favorites/${e.target.id}`,{
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json',
       Accept: 'application/json',
       Authorization: `Bearer ${token}`
     }
   })
   .then(window.location.reload())
 }
}

  render() {

    return (
      <div>
        <header >
          <Navigation time={this.state.time}/>
        </header>
        <div className="hjumbo" style={{backgroundImage: `url(${plate})`, backgroundSize: 'cover'}} >
        </div>
        <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          <Route exact path= '/profile' render={()=> (this.props.currentUser.username) ? <Profile user={this.props.currentUser} logout={this.handleLogout} userFavs={this.state.userFavs} deleteFav={this.deleteFav} /> : <Login />} />
          <Route exact path= '/users' render={()=> (this.props.currentUser.username) ? <Users user={this.props.currentUser} users={this.state.users} /> : <Login />} />
          <Route exact path= '/search' render={()=> (this.props.currentUser.username) ? <Search time={this.state.time} hour={this.state.hour} user={this.props.currentUser} saveFavortie={this.saveFavortie} /> : <Login />} />

          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
