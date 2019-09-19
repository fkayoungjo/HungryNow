##Hungry Now

Hungry Now is my final project for the Flatiron School. It is a recipe application which helps you find a way to eat when you need to eat right now. The purpose of the application is to get you eating within 30 minutes. To signup, the user enters a username, password, URL for an avatar photo, location, and bio. The user has a profile page which features their information and their favorites. When searching for recipe you are given criteria to help narrow your search and when you search for restaurant or delivery options you are given the option to pick the cuisine. You are given the top 20 results based on criteria and location. Recipe results are provided via Edamame and restaurant and delivery results are provided through Zomato.

##Getting Started
![Image description](/Users/jordansimon/Development/HungryNow/Screen Shot 2019-09-19 at 4.02.39 PM.png)

To begin using fork and clone the frontend and back end of the project. CD into backend project folder. Use rake to create and migrate the database. Use rails start to server.

` bash
rake db: create
`

` bash
rake db: migrate
`

`bash
rails start
`

CD into front end project folder. Use npm to install and start the react server

`bash
npm I && npm start
`


##Usage

export const userPostFetch = user => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {

          password: user.signupPassword,
          username: user.username,
          avatar: user.avatar,
          location: user.location,
          bio: user.bio
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}


##Built With

React.js
Reactstrap
React Router
Redux Think
Ruby on Rails
Postgressql

##Authors

Jordan Simon - Initial Work

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
