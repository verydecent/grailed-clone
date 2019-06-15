import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {
    console.log("onSubmit");
  }

  onChange = event => {
    console.log("onChange");
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an Account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };