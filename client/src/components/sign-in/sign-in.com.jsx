import React, { Component, useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.com";
import "./sign-in.sty.scss";
import CustomButton from "../custom-button/custom-button.com";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

function SignIn({ emailSignInStart, googleSignInStart }) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>SIGNIN</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={onChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={onChange}
          label="Password"
        />
        <CustomButton type="submit" value="Signin">
          Sign in
        </CustomButton>
        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
          Sign in With Google
        </CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
