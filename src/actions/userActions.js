export const userPostFetch = user => {
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

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {

          password: user.loginPassword,
          username: user.username
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }

}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
