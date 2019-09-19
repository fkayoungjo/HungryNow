import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from './actions/userActions';
import knifefork from './knifefork.png';
import {Button, Row, Col, FormGroup, Label, Input, Form, NavLink, FormText} from 'reactstrap';

class Login extends Component {
  state = {
    username: "",
    loginPassword: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
    
  }

  render() {

    return (
      <div className="signup">
      <h1>HUNGRY <img src={knifefork} alt="knifefork" width="50" height="50"/>NOW? </h1>
      <p>Sign in to use</p>
      <Form className="login" onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Login Username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="Enter Username" value={this.state.username}
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Login Password">Password</Label>
              <Input type="text" name="loginPassword" id="loginPassword" placeholder="Enter Password" value={this.state.loginPassword}
            onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign In</Button>
        </Form>

        <FormText> Not a member? <NavLink href="/signup" className="navitem">Sign Up! </NavLink></FormText>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
