import React, {Component} from 'react';
import {Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {userPostFetch} from './/actions/userActions';

class Signup extends Component {
  state = {
    signupPassword: "",
    username: "",
    avatar: "",
    bio: "",
    location: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
    this.props.history.push("/profile")

  }

  render() {
    return (
      <div className="signup">
      <h1>Sign Up</h1>
      <Form className="login" onSubmit={this.handleSubmit}>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="Enter Username" value={this.state.username}
          onChange={this.handleChange}/>
          </FormGroup>
        </Col>
          <Col md={6}>
          <FormGroup>
            <Label for="Sign Up Password">Password</Label>
            <Input type="text" name="signupPassword" id="signupPassword" placeholder="Enter Password" value={this.state.signupPassword}
          onChange={this.handleChange}/>
          </FormGroup>
          </Col>

        </Row>
        <Row form>
          <Col md={6}>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input type="text" name="location" id="location" placeholder="Enter Location" value={this.state.location}
          onChange={this.handleChange}/>
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
         <Label for="avatar">Profile Picture</Label>
          <Input type="text" name="avatar" id="avatar" value={this.state.avatar} placeholder="Please enter picture url"
        onChange={this.handleChange}/>
            </FormGroup>
            </Col>
        </Row>
        <Row>
        <Col>
        <FormGroup>
       <Label for="bio">Bio</Label>
        <Input type="text" name="bio" id="bio" value={this.state.bio} placeholder="Say a little something about yourself"
      onChange={this.handleChange}/>
          </FormGroup>
          </Col>
        </Row>
        <Button>Submit</Button>
      </Form>
    </div>
         )
       }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
