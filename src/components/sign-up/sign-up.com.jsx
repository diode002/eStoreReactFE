import React, { Component } from "react";
import FormInput from "../form-input/form-input.com";
import "./sign-up.sty.scss";
import CustomButton from "../custom-button/custom-button.com";
import { auth } from "../../utils/firebase/firebase.utils";
import { createUserProfileDocument } from "../../utils/firebase/firestore.utils";
class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passowrd dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
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

export default SignUp;
