import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.com";
import "./sign-up.sty.scss";
import CustomButton from "../custom-button/custom-button.com";

import { signUpStart } from "../../redux/user/user.actions";
class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleSubmit = async (event) => {
    const { signUpStart } = this.props;
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passowrd dont match");
      return;
    }

    await signUpStart(email, password, displayName);
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h1>SIGNUP</h1>
        <span>Sign up by providing the following details</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            required
            handleChange={this.onChange}
            label="Display Name"
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.onChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.onChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            required
            handleChange={this.onChange}
            label="Confirm Password"
          />
          <CustomButton type="submit" value="Signup">
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});
export default connect(null, mapDispatchToProps)(SignUp);
